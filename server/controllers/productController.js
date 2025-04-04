import productModel from "../models/productModel";
import { productSchema } from "../validation/product";

async function getAllProducts(req, res) {
  try {
    const productList = await productModel.find();
    res.json(productList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getProductDetail(req, res) {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createProduct(req, res) {
  try {
    const { name, price } = req.body;
    const { error } = productSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errorsMessage = error.details.map((err) => err.message);
      return res.status(400).json({ message: errorsMessage });
    }
    // const newProduct = new productModel(req.body);
    // const productCreated = await newProduct.save();

    const productCreated = await productModel.create(req.body);
    res.status(201).json(productCreated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true, // Trả về dữ liệu mới sau khi cập nhật
    });
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id); // tim kiem id -> xoa
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.json({ message: "Xoa san pham thanh cong" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {
  getAllProducts,
  getProductDetail,
  updateProduct,
  createProduct,
  deleteProduct,
};
