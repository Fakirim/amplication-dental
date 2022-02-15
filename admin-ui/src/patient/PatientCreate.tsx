import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
