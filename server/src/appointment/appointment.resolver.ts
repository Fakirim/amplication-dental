import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AppointmentResolverBase } from "./base/appointment.resolver.base";
import { Appointment } from "./base/Appointment";
import { AppointmentService } from "./appointment.service";

@graphql.Resolver(() => Appointment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AppointmentResolver extends AppointmentResolverBase {
  constructor(
    protected readonly service: AppointmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
