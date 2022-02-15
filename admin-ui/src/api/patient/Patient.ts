import { Appointment } from "../appointment/Appointment";

export type Patient = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
