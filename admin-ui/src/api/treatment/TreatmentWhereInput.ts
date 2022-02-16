import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TreatmentWhereInput = {
  expenses?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
