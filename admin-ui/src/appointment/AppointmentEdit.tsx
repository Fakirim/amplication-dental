import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { TreatmentTitle } from "../treatment/TreatmentTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="complaint" source="complaint" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="diagnosis" source="diagnosis" />
        <NumberInput label="finalPrice" source="finalPrice" />
        <NumberInput step={1} label="involvedTeeth" source="involvedTeeth" />
        <BooleanInput label="isDone" source="isDone" />
        <TextInput label="notes" source="notes" />
        <NumberInput label="paidAmount" source="paidAmount" />
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
        <NumberInput step={1} label="units" source="units" />
      </SimpleForm>
    </Edit>
  );
};
