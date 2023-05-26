const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.controller");
const adminRouter = require("./src/routes/admin.controller");
const cors = require("cors")
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/admin", adminRouter);

// DB connection

mongoose
  .connect("mongodb://localhost:27017/customer")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

// Server listen
app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
