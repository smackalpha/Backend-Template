import express from "express";
import userCreationalSchema from "./schema/userCreationalSchema.js";


const router = express.Router();
router.use(express.json());



router.post("/login", async (req, res) => {
  console.log("login");
  if (req.body.user === "admin") {

    return res.json({ success: true, message: "Login Successfull" });
  }
    // DB QUERY
    
    // let login = await userCreationalSchema.find({
    //   $and: [{ username: req.body.username }, { password: req.body.password }],
    // });

  //   let login=["first"]
  //   if (login.length === 1) {
  //     if (req.body.username === "admin") {
  //       return res.json({ success: true, message: "Shop Owner" });
  //     } else if (req.body.username === "user") {
  //       return res.json({ success: true, message: "Designing Team" });
  //     }
  //   } else {
  //     return res.json({ success: false, message: "" });
  //   }
  // } else {
  //   return res.json({ success: false, message: "" });
  // }
});


router.get("/apiCheck", async (req, res) => {
  return res.json({ success: "true", message: "API Running" });
});

export default router;
