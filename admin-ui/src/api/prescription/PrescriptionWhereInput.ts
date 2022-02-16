import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PrescriptionWhereInput = {
  doseInMg?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  timesPerDay?: IntNullableFilter;
  unitsPerTime?: IntNullableFilter;
};
