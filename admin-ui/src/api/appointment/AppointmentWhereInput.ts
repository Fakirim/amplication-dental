import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type AppointmentWhereInput = {
  complaint?: StringNullableFilter;
  date?: DateTimeFilter;
  diagnosis?: StringNullableFilter;
  finalPrice?: FloatNullableFilter;
  id?: StringFilter;
  involvedTeeth?: IntNullableFilter;
  isDone?: BooleanNullableFilter;
  notes?: StringNullableFilter;
  paidAmount?: FloatNullableFilter;
  patient?: PatientWhereUniqueInput;
  treatment?: TreatmentWhereUniqueInput;
  units?: IntNullableFilter;
};
