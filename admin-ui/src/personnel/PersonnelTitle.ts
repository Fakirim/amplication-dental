import { Personnel as TPersonnel } from "../api/personnel/Personnel";

export const PERSONNEL_TITLE_FIELD = "name";

export const PersonnelTitle = (record: TPersonnel): string => {
  return record.name || record.id;
};
