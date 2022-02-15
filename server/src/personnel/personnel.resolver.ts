import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PersonnelResolverBase } from "./base/personnel.resolver.base";
import { Personnel } from "./base/Personnel";
import { PersonnelService } from "./personnel.service";

@graphql.Resolver(() => Personnel)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PersonnelResolver extends PersonnelResolverBase {
  constructor(
    protected readonly service: PersonnelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
