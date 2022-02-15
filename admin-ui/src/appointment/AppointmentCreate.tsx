import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { TreatmentTitle } from "../treatment/TreatmentTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="patient.id" reference="Patient" label="patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="treatment.id"
          reference="Treatment"
          label="treatment"
        >
          <SelectInput optionText={TreatmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};