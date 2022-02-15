import { Treatment as TTreatment } from "../api/treatment/Treatment";

export const TREATMENT_TITLE_FIELD = "id";

export const TreatmentTitle = (record: TTreatment): string => {
  return record.id || record.id;
};
