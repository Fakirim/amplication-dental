import { Patient } from "../patient/Patient";
import { Treatment } from "../treatment/Treatment";

export type Appointment = {
  complaint: string | null;
  createdAt: Date;
  date: Date;
  diagnosis: string | null;
  finalPrice: number | null;
  id: string;
  involvedTeeth: number | null;
  isDone: boolean | null;
  notes: string | null;
  paidAmount: number | null;
  patient?: Patient | null;
  treatment?: Treatment | null;
  units: number | null;
  updatedAt: Date;
};
