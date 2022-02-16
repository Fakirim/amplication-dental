import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PrescriptionServiceBase } from "./base/prescription.service.base";

@Injectable()
export class PrescriptionService extends PrescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
