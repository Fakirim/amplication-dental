import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TreatmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="expenses" source="expenses" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
