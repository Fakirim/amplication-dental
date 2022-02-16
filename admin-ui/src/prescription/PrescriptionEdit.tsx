import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PrescriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="doseInMg" source="doseInMg" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="timesPerDay" source="timesPerDay" />
        <NumberInput step={1} label="unitsPerTime" source="unitsPerTime" />
      </SimpleForm>
    </Edit>
  );
};
