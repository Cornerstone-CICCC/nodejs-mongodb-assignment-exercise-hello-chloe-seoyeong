import { Request, Response } from "express";
import { IProduct, Product } from "../models/product.model";

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to get all products" });
  }
};
// Get product by id

// Get product by name

// Add product
const addProduct = async (req: Request<{}, {}, IProduct>, res: Response) => {
  try {
    const { productName, productPrice } = req.body;
    const product = await Product.create({ productName, productPrice });
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to add product" });
  }
};

// Update product by id

// Delete product by id

export default {
  addProduct,
  getAllProducts,
};
