import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { TREATMENT_TITLE_FIELD } from "./TreatmentTitle";

export const TreatmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expenses" source="expenses" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="TreatmentId"
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
