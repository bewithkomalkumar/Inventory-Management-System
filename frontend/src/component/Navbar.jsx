import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className=" flex justify-between pl-4 pr-4  bg-[#6e42e5] text-white h-[70px] items-center">
      <h1 className="text-2xl font-semibold">Inventory Management System</h1>
      <div className=" flex gap-4">
        <Link
          to={"/add"}
          onClick={() => {
            setSelected(2);
          }}
          className={`${
            selected === 2 ? "text-red-300" : "text-white"
          } text-lg hover:text-black font-semibold`}
        >
          Add Grocery
        </Link>
        <Link
          to={"/"}
          onClick={() => {
            setSelected(1);
          }}
          className={`${
            selected === 1 ? "text-red-300" : "text-white"
          } text-lg hover:text-black font-semibold`}
        >
          Show All Grocery
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
