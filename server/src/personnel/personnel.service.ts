import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PersonnelServiceBase } from "./base/personnel.service.base";

@Injectable()
export class PersonnelService extends PersonnelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
