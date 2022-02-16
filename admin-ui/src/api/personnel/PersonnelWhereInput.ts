import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PersonnelWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  operates?: StringNullableFilter;
};
