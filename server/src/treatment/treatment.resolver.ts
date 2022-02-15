import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TreatmentResolverBase } from "./base/treatment.resolver.base";
import { Treatment } from "./base/Treatment";
import { TreatmentService } from "./treatment.service";

@graphql.Resolver(() => Treatment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TreatmentResolver extends TreatmentResolverBase {
  constructor(
    protected readonly service: TreatmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
