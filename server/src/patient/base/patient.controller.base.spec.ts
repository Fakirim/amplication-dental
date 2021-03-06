import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PatientController } from "../patient.controller";
import { PatientService } from "../patient.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  avatar: "exampleAvatar",
  birthYear: new Date(),
  createdAt: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  gallery: "exampleGallery",
  id: "exampleId",
  lastName: "exampleLastName",
  phone: "examplePhone",
  tags: "exampleTags",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  address: "exampleAddress",
  avatar: "exampleAvatar",
  birthYear: new Date(),
  createdAt: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  gallery: "exampleGallery",
  id: "exampleId",
  lastName: "exampleLastName",
  phone: "examplePhone",
  tags: "exampleTags",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    avatar: "exampleAvatar",
    birthYear: new Date(),
    createdAt: new Date(),
    email: "exampleEmail",
    firstName: "exampleFirstName",
    gallery: "exampleGallery",
    id: "exampleId",
    lastName: "exampleLastName",
    phone: "examplePhone",
    tags: "exampleTags",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  avatar: "exampleAvatar",
  birthYear: new Date(),
  createdAt: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  gallery: "exampleGallery",
  id: "exampleId",
  lastName: "exampleLastName",
  phone: "examplePhone",
  tags: "exampleTags",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Patient", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PatientService,
          useValue: service,
        },
      ],
      controllers: [PatientController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /patients", async () => {
    await request(app.getHttpServer())
      .post("/patients")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthYear: CREATE_RESULT.birthYear.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /patients", async () => {
    await request(app.getHttpServer())
      .get("/patients")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          birthYear: FIND_MANY_RESULT[0].birthYear.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /patients/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patients"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /patients/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/patients"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        birthYear: FIND_ONE_RESULT.birthYear.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
