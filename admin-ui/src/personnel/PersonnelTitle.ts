import { Personnel as TPersonnel } from "../api/personnel/Personnel";

export const PERSONNEL_TITLE_FIELD = "id";

export const PersonnelTitle = (record: TPersonnel): string => {
  return record.id || record.id;
};
