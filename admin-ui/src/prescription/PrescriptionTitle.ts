import { Prescription as TPrescription } from "../api/prescription/Prescription";

export const PRESCRIPTION_TITLE_FIELD = "name";

export const PrescriptionTitle = (record: TPrescription): string => {
  return record.name || record.id;
};
