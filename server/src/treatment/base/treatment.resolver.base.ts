/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteTreatmentArgs } from "./DeleteTreatmentArgs";
import { TreatmentFindManyArgs } from "./TreatmentFindManyArgs";
import { TreatmentFindUniqueArgs } from "./TreatmentFindUniqueArgs";
import { Treatment } from "./Treatment";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { TreatmentService } from "../treatment.service";

@graphql.Resolver(() => Treatment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TreatmentResolverBase {
  constructor(
    protected readonly service: TreatmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Treatment",
    action: "read",
    possession: "any",
  })
  async _treatmentsMeta(
    @graphql.Args() args: TreatmentFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Treatment])
  @nestAccessControl.UseRoles({
    resource: "Treatment",
    action: "read",
    possession: "any",
  })
  async treatments(
    @graphql.Args() args: TreatmentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Treatment[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Treatment",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Treatment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Treatment",
    action: "read",
    possession: "own",
  })
  async treatment(
    @graphql.Args() args: TreatmentFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Treatment | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Treatment",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Treatment)
  @nestAccessControl.UseRoles({
    resource: "Treatment",
    action: "delete",
    possession: "any",
  })
  async deleteTreatment(
    @graphql.Args() args: DeleteTreatmentArgs
  ): Promise<Treatment | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Appointment])
  @nestAccessControl.UseRoles({
    resource: "Treatment",
    action: "read",
    possession: "any",
  })
  async appointments(
    @graphql.Parent() parent: Treatment,
    @graphql.Args() args: AppointmentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Appointment[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Appointment",
    });
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
