import { Router } from "express";
import productRouter from "./productRouter";
import authRouter from "./authRouter";
import paymentRouter from "./paymentRouter";

const router = Router();

router.get("/", function (req, res) {
  res.send("hello Homepage");
});

router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/", paymentRouter);

export default router;
