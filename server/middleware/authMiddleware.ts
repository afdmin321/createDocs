const jwt = require("jsonwebtoken");
class AuthMiddleware {
  auth(req, res, next) {
    const token = req.header("authorization");
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
      const decoded = jwt.verify(token, "randomString");
      req.user = decoded.user;
      next();
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Invalid Token" });
    }
  }
}
export default new AuthMiddleware();
