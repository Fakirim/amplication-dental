import { PersonnelWhereInput } from "./PersonnelWhereInput";
import { PersonnelOrderByInput } from "./PersonnelOrderByInput";

export type PersonnelFindManyArgs = {
  where?: PersonnelWhereInput;
  orderBy?: PersonnelOrderByInput;
  skip?: number;
  take?: number;
};
