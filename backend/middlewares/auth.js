const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("test3")
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "invalid user id";
    } else {
      console.log("test4")
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("invalid request"),
    });
  }
};

