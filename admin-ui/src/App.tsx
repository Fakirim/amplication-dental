import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PersonnelList } from "./personnel/PersonnelList";
import { PersonnelCreate } from "./personnel/PersonnelCreate";
import { PersonnelEdit } from "./personnel/PersonnelEdit";
import { PersonnelShow } from "./personnel/PersonnelShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { TreatmentList } from "./treatment/TreatmentList";
import { TreatmentCreate } from "./treatment/TreatmentCreate";
import { TreatmentEdit } from "./treatment/TreatmentEdit";
import { TreatmentShow } from "./treatment/TreatmentShow";
import { PrescriptionList } from "./prescription/PrescriptionList";
import { PrescriptionCreate } from "./prescription/PrescriptionCreate";
import { PrescriptionEdit } from "./prescription/PrescriptionEdit";
import { PrescriptionShow } from "./prescription/PrescriptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Logi-dental"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Personnel"
          list={PersonnelList}
          edit={PersonnelEdit}
          create={PersonnelCreate}
          show={PersonnelShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="Treatment"
          list={TreatmentList}
          edit={TreatmentEdit}
          create={TreatmentCreate}
          show={TreatmentShow}
        />
        <Resource
          name="Prescription"
          list={PrescriptionList}
          edit={PrescriptionEdit}
          create={PrescriptionCreate}
          show={PrescriptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
