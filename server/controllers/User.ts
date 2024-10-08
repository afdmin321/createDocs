const UserSchema = require("../schema/UserSchema");
import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");
class User {
  async created(req: any, res: any, next) {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newuser = await UserSchema.create({
      username,
      password: passwordHash,
    });
    const token = await jwt.sign(
      {
        userId: newuser.id,
      },
      "randomString",
      {
        expiresIn: "3h",
      }
    );
    return res.status(201).json({
      status: "sucess",
      mssg: "hey signed in sucessfully",
      token: token,
    });
  }
  async login(req: any, res: any, next) {
    const { username, password } = req.body;
    try {
      const user = await UserSchema.findOne({
        username,
      });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          massage: "Incorrect password!",
        });
      }
      const token = await jwt.sign(
        {
          userId: user.id,
        },
        "randomString",
        {
          expiresIn: "3h",
        }
      );
      return res.status(200).json({
        token,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
export default new User();
