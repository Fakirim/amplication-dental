import { TreatmentWhereInput } from "./TreatmentWhereInput";
import { TreatmentOrderByInput } from "./TreatmentOrderByInput";

export type TreatmentFindManyArgs = {
  where?: TreatmentWhereInput;
  orderBy?: TreatmentOrderByInput;
  skip?: number;
  take?: number;
};
