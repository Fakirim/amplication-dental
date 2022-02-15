import { Module } from "@nestjs/common";
import { PersonnelModuleBase } from "./base/personnel.module.base";
import { PersonnelService } from "./personnel.service";
import { PersonnelController } from "./personnel.controller";
import { PersonnelResolver } from "./personnel.resolver";

@Module({
  imports: [PersonnelModuleBase],
  controllers: [PersonnelController],
  providers: [PersonnelService, PersonnelResolver],
  exports: [PersonnelService],
})
export class PersonnelModule {}
