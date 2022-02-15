import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date;
  patient?: PatientWhereUniqueInput | null;
  treatment?: TreatmentWhereUniqueInput | null;
};
