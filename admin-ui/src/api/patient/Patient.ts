import { Appointment } from "../appointment/Appointment";

export type Patient = {
  address: string | null;
  appointments?: Array<Appointment>;
  avatar: string | null;
  birthYear: Date | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  gallery: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  tags: string | null;
  updatedAt: Date;
};
