require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./Database/database");
const morgan = require("morgan");
const Grocery_Router = require("./Router/grocery_router");
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({ message: "Server is running Successfully" });
});
app.use("/grocery", Grocery_Router);
connectDatabase()
  .then(
    app.listen(8000, () => {
      console.warn("Server is listning on http://localhost:8000");
    })
  )
  .catch((err) => {
    console.log(err);
    console.log("Error connecting DataBase");
  });
