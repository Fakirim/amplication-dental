import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
