import React, { useState } from "react";
import axios from "axios";
const AddGrocery = () => {
  const [item, setItem] = useState({
    product_name: "",
    quantity: 0,
    price_per_unit: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      item.product_name !== "" &&
      item.price_per_unit !== 0 &&
      item.quantity !== 0
    ) {
      axios
        .post(`http://localhost:8000/grocery/add`, item)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert("Error");
        });
    } else {
      alert("Values missing");
      return;
    }

    alert("Item Added!");

    setItem({
      product_name: "",
      quantity: 0,
      price_per_unit: 0,
    });
  };
  const handleInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "quantity" || name === "price_per_unit") {
      value = Number(value);
    }

    setItem({ ...item, [name]: value });
  };
  console.log(item);

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
          name="product_name"
          onChange={handleInput}
          className="border text-lg "
          value={item.product_name}
          placeholder="Enter Product Name"
        />

        <label className="mb-1 mt-2 text-lg text-gray-600  font-[500]">
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          className="border text-lg"
          onChange={handleInput}
          value={item.quantity === 0 ? "" : item.quantity}
          placeholder="Enter Quantity"
        />

        <label className="mb-1 mt-2 text-lg text-gray-600  font-[500]">
          Price Per Unit
        </label>
        <input
          type="number"
          name="price_per_unit"
          onChange={handleInput}
          value={item.price_per_unit === 0 ? "" : item.price_per_unit}
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
