import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type AppointmentWhereInput = {
  date?: DateTimeFilter;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  treatment?: TreatmentWhereUniqueInput;
};
