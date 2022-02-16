import { Appointment } from "../appointment/Appointment";

export type Treatment = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  expenses: number | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
