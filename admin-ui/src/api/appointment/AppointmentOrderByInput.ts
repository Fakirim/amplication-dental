import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  complaint?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  diagnosis?: SortOrder;
  finalPrice?: SortOrder;
  id?: SortOrder;
  involvedTeeth?: SortOrder;
  isDone?: SortOrder;
  notes?: SortOrder;
  paidAmount?: SortOrder;
  patientId?: SortOrder;
  treatmentId?: SortOrder;
  units?: SortOrder;
  updatedAt?: SortOrder;
};
