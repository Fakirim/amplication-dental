import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "complaint";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.complaint || record.id;
};
