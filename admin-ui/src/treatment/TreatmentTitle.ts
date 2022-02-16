import { Treatment as TTreatment } from "../api/treatment/Treatment";

export const TREATMENT_TITLE_FIELD = "name";

export const TreatmentTitle = (record: TTreatment): string => {
  return record.name || record.id;
};
