export type Prescription = {
  createdAt: Date;
  doseInMg: number | null;
  id: string;
  name: string | null;
  timesPerDay: number | null;
  unitsPerTime: number | null;
  updatedAt: Date;
};
