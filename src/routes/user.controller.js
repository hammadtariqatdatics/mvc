const express = require("express");
const Customer = require("../models/customer");
const validateFunction = require("../utility/ValidateFunction");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Customer.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updatedData = await Customer.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        email: email,
        password: password,
      }
    );
    res
      .status(201)
      .send({ message: "Customer updated succssfully", data: updatedData });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Customer not updated succssfully", error });
    // all you need is to believe in you.....
  }
});

router.get("/getbyid/:n", async (req, res) => {
  try {
    const id = req.params.n;
    const data = await Customer.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/create", async (req, res) => {
  try {
    const payload = req.body;
    const { error } = validateFunction(payload);
    console.log(error);
    if (error) {
      return res.status(400).send({ message: error.message });
    }
    const customer = new Customer(payload);
    const customerData = await customer.save();
    res
      .status(200)
      .send({ message: "Customer created succssfully", customerData });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Customer not created succssfully", error });
    // all you need is to believe in you.....
  }
});

module.exports = router;
