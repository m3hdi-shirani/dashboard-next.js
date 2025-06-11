import AttendanceChart from "@/components/AttendanceChart";
import Countchart from "@/components/Countchart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Cards */}
        <div className=" flex justify-between gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle charts */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <Countchart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default Admin;
