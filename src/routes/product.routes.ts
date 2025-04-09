import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/", productController.addProduct);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);

export default productRouter;
