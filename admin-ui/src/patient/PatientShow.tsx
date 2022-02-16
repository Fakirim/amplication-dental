import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PATIENT_TITLE_FIELD } from "./PatientTitle";
import { TREATMENT_TITLE_FIELD } from "../treatment/TreatmentTitle";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="avatar" source="avatar" />
        <TextField label="birthYear" source="birthYear" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="gallery" source="gallery" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phone" source="phone" />
        <TextField label="tags" source="tags" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="PatientId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <TextField label="complaint" source="complaint" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="diagnosis" source="diagnosis" />
            <TextField label="finalPrice" source="finalPrice" />
            <TextField label="ID" source="id" />
            <TextField label="involvedTeeth" source="involvedTeeth" />
            <BooleanField label="isDone" source="isDone" />
            <TextField label="notes" source="notes" />
            <TextField label="paidAmount" source="paidAmount" />
            <ReferenceField
              label="patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="treatment"
              source="treatment.id"
              reference="Treatment"
            >
              <TextField source={TREATMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="units" source="units" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
