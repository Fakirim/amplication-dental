import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PrescriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="doseInMg" source="doseInMg" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="timesPerDay" source="timesPerDay" />
        <NumberInput step={1} label="unitsPerTime" source="unitsPerTime" />
      </SimpleForm>
    </Create>
  );
};
