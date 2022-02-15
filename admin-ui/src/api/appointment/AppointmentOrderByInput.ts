import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  treatmentId?: SortOrder;
  updatedAt?: SortOrder;
};
