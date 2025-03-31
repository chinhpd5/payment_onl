import { Router } from "express";
import productRouter from "./productRouter";
import authRouter from "./authRouter";
import paymentRouter from "./paymentRouter";
import paymentZaloRouter from "./paymentZaloRouter";

const router = Router();

router.get("/", function (req, res) {
  res.send("hello Homepage");
});

router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/", paymentRouter);
router.use("/zalo", paymentZaloRouter);



export default router;
