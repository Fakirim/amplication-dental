import { SortOrder } from "../../util/SortOrder";

export type PersonnelOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  operates?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
