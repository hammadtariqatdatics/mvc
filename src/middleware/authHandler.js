const { verifyAuthToken } = require("../utility/authToken");

const authHandler = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res
        .status(400)
        .send({ message: "Access denied.. you are not authenticated" });
    } else {
      const authCustomer = verifyAuthToken(token);
      console.log(authCustomer);
      next();
    }
  } catch (error) {
    res.status(400).send({ message: "Token not generated...." });
  }
};

module.exports = authHandler;
