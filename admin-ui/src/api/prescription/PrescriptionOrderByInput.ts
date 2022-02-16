import { SortOrder } from "../../util/SortOrder";

export type PrescriptionOrderByInput = {
  createdAt?: SortOrder;
  doseInMg?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  timesPerDay?: SortOrder;
  unitsPerTime?: SortOrder;
  updatedAt?: SortOrder;
};
