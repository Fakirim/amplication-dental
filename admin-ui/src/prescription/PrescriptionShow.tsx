import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PrescriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="doseInMg" source="doseInMg" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="timesPerDay" source="timesPerDay" />
        <TextField label="unitsPerTime" source="unitsPerTime" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
