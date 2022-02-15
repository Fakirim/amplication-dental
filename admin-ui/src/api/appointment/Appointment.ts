import { Patient } from "../patient/Patient";
import { Treatment } from "../treatment/Treatment";

export type Appointment = {
  createdAt: Date;
  date: Date;
  id: string;
  patient?: Patient | null;
  treatment?: Treatment | null;
  updatedAt: Date;
};
