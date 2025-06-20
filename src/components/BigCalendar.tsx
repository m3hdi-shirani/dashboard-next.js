"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnchageView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "98%" }}
        views={["work_week", "day"]}
        view={view}
        onView={handleOnchageView}
        min={new Date(2025, 5, 0, 8, 0, 0)}
        max={new Date(2025, 7, 0, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;
