import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PersonnelService } from "./personnel.service";
import { PersonnelControllerBase } from "./base/personnel.controller.base";

@swagger.ApiTags("personnel")
@common.Controller("personnel")
export class PersonnelController extends PersonnelControllerBase {
  constructor(
    protected readonly service: PersonnelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
