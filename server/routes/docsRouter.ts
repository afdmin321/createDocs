import { Router } from "express";
import path from "path";
const router = Router();
const dist = path.resolve("dist", "index.html");
import createdDocs from "../controllers/createdDocs";
import createUser from "../controllers/User";
import AuthMiddleware from "../middleware/authMiddleware";
// router.get("/", (req, res) => {
//   res.redirect("https://xn----etbbcx3acanefm9n.xn--p1ai/");
// });
router.get("/doc", (req, res) => {
  res.status(200).sendFile(dist);
});
console.log(createUser.created);
console.log(createUser);
router.post("/user/create", createUser.created);
router.post("/user/login", createUser.login);

router.post("/created", AuthMiddleware.auth, createdDocs.created);

router.get("/trotling", AuthMiddleware.auth, async (req, res) => {
  res.status(200).send({ point: 20000 });
});

export default router;
