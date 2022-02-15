import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "key";

export const SettingTitle = (record: TSetting): string => {
  return record.key || record.id;
};
