import React from "react";

const AddGrocery = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item Added!");
  };

  return (
    <div className=" w-[50%] m-auto mt-[50px] p-4 shadow-lg border-2 rounded-md ">
      <h1 className="text-center text-2xl font-bold mb-3 underline">
        _Add New Grocery_
      </h1>
      <form onSubmit={handleSubmit} className=" flex flex-col">
        <label className="mb-1 mt-2 text-lg text-gray-600  font-[500]">
          Product Name
        </label>
        <input
          type="text"
          className="border text-lg "
          placeholder="Enter Product Name"
        />

        <label className="mb-1 mt-2 text-lg text-gray-600  font-[500]">
          Quantity
        </label>
        <input
          type="number"
          className="border text-lg"
          placeholder="Enter Quantity"
        />

        <label className="mb-1 mt-2 text-lg text-gray-600  font-[500]">
          Price Per Unit
        </label>
        <input
          type="number"
          className="border text-lg"
          placeholder="Enter Price"
        />
        <label className="mb-1 mt-2 text-lg text-gray-600  font-[500]">
          Select Display Image
        </label>
        <input
          type="file"
          className="border text-lg"
          placeholder="Enter Price"
        />
        <button
          className=" bg-[#6e42e5] text-white text-lg font-semibold p-1 mt-5 mb-5 rounded-md"
          type="submit"
        >
          Add to Inventory
        </button>
      </form>
    </div>
  );
};

export default AddGrocery;
