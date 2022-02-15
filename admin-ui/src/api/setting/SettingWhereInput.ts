import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SettingWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: StringNullableFilter;
};
