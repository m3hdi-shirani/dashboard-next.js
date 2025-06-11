import UserCard from "@/components/UserCard";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* User Cards */}
        <div className=" flex justify-between gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default Admin;
