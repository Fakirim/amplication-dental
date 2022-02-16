import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type AppointmentCreateInput = {
  complaint?: string | null;
  date: Date;
  diagnosis?: string | null;
  finalPrice?: number | null;
  involvedTeeth?: number | null;
  isDone?: boolean | null;
  notes?: string | null;
  paidAmount?: number | null;
  patient?: PatientWhereUniqueInput | null;
  treatment?: TreatmentWhereUniqueInput | null;
  units?: number | null;
};
