import { PrescriptionWhereInput } from "./PrescriptionWhereInput";
import { PrescriptionOrderByInput } from "./PrescriptionOrderByInput";

export type PrescriptionFindManyArgs = {
  where?: PrescriptionWhereInput;
  orderBy?: PrescriptionOrderByInput;
  skip?: number;
  take?: number;
};
