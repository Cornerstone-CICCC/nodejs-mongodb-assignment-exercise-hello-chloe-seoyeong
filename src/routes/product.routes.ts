import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/search", productController.getProductsByName);
productRouter.post("/", productController.addProduct);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.put("/:id", productController.updateProduct);

export default productRouter;
