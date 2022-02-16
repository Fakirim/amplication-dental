import { SortOrder } from "../../util/SortOrder";

export type TreatmentOrderByInput = {
  createdAt?: SortOrder;
  expenses?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
