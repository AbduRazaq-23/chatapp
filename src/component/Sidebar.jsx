import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="  bg-slate-200 h-full ">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
