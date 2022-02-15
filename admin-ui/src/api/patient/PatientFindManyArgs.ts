import { PatientWhereInput } from "./PatientWhereInput";
import { PatientOrderByInput } from "./PatientOrderByInput";

export type PatientFindManyArgs = {
  where?: PatientWhereInput;
  orderBy?: PatientOrderByInput;
  skip?: number;
  take?: number;
};
