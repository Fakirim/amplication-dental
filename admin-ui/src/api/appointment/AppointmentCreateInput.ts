import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type AppointmentCreateInput = {
  date: Date;
  patient?: PatientWhereUniqueInput | null;
  treatment?: TreatmentWhereUniqueInput | null;
};
