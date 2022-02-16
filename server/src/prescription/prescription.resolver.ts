import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PrescriptionResolverBase } from "./base/prescription.resolver.base";
import { Prescription } from "./base/Prescription";
import { PrescriptionService } from "./prescription.service";

@graphql.Resolver(() => Prescription)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PrescriptionResolver extends PrescriptionResolverBase {
  constructor(
    protected readonly service: PrescriptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
