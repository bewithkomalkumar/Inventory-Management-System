import React, { useEffect, useState } from "react";
import axios from "axios";
const ShowAll = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/grocery/all`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" w-[95%] m-auto mt-[30px] grid grid-cols-4 gap-[20px] ">
      {data.map((el) => {
        return (
          <div key={el._id} className=" shadow-md p-1 border">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KMuMkw0R8Iv8i78Xcv0qbD27fIO5H82Wag&usqp=CAU"
              alt=""
            />
            <h3>
              <span className="font-semibold">Product Name : </span>
              {el.product_name}
            </h3>
            <p>
              <span className="font-semibold">Quantity : </span>
              {el.quantity}
            </p>
            <p>
              <span className="font-semibold">Price Per Unit : </span>
              {el.price_per_unit}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAll;
