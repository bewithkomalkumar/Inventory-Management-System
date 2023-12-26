const Grocery = require("../Database/grocery");

const AddItem = async (req, res) => {
  try {
    const { product_name, quantity, price_per_unit } = req.body;
    if (product_name && quantity && price_per_unit) {
      const grocery = await Grocery.create({
        product_name,
        quantity,
        price_per_unit,
      });
      return res.status(200).send({ message: "Success", data: grocery });
    }

    return res.status(206).send({ message: "Fields are missing" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getAllItem = async (req, res) => {
  try {
    const grocery = await Grocery.find();

    res.status(200).send({ message: "Success", data: grocery });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error", data: null });
  }
};

module.exports = {
  AddItem,
  getAllItem,
};
