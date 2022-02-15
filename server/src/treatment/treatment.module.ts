import { Module } from "@nestjs/common";
import { TreatmentModuleBase } from "./base/treatment.module.base";
import { TreatmentService } from "./treatment.service";
import { TreatmentController } from "./treatment.controller";
import { TreatmentResolver } from "./treatment.resolver";

@Module({
  imports: [TreatmentModuleBase],
  controllers: [TreatmentController],
  providers: [TreatmentService, TreatmentResolver],
  exports: [TreatmentService],
})
export class TreatmentModule {}
