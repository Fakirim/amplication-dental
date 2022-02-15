import { Appointment } from "../appointment/Appointment";

export type Treatment = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
