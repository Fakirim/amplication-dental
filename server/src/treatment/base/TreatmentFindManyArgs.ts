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
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TreatmentWhereInput } from "./TreatmentWhereInput";
import { Type } from "class-transformer";
import { TreatmentOrderByInput } from "./TreatmentOrderByInput";

@ArgsType()
class TreatmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TreatmentWhereInput,
  })
  @Field(() => TreatmentWhereInput, { nullable: true })
  @Type(() => TreatmentWhereInput)
  where?: TreatmentWhereInput;

  @ApiProperty({
    required: false,
    type: TreatmentOrderByInput,
  })
  @Field(() => TreatmentOrderByInput, { nullable: true })
  @Type(() => TreatmentOrderByInput)
  orderBy?: TreatmentOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TreatmentFindManyArgs };
