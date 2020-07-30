import React from "react";
import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
  MonthAgenda,
  TimelineViews,
  TimelineMonth,
} from "@syncfusion/ej2-react-schedule";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

function App() {
  return (
    <div>
      <ScheduleComponent currentView="Month">
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            MonthAgenda,
            TimelineViews,
            TimelineMonth,
          ]}
        />
      </ScheduleComponent>
    </div>
  );
}

export default App;
