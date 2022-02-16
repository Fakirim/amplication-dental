import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { TREATMENT_TITLE_FIELD } from "../treatment/TreatmentTitle";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="patient" source="patient.id" reference="Patient">
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
    </List>
  );
};
