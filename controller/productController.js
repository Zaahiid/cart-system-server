import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ message: "Failed to get products" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    if (!name || !price || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({ name, price, description, image });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        product[key] = updates[key];
      }
    }

    product = await product.save();
    console.log("Updated Product :", product);

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log("Product Deleted Successfully", deletedProduct);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product Deleted Successfully", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};
