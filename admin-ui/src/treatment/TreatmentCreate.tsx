import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TreatmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="expenses" source="expenses" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
