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
      // Destructure the required fields from the request body
      const { name, price, description, image } = req.body;
  
      // Check if all required fields are provided
      if (!name || !price || !description || !image) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Create a new Product instance
      const product = new Product({ name, price, description, image });
  
      // Save the product to the database
      await product.save();
  
      // Return the created product as response
      res.status(201).json(product);
    } catch (error) {
      // Handle any errors that occur during product creation or saving
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Failed to create product" });
    }
  };

  export const updateProduct = async (req, res) => {
    try {
      const { id } = req.params; // Extract the product ID from the request parameters
      const updates = req.body; // Extract updated product information from the request body
  
      // Check if the provided ID is valid
      if (!id) {
        return res.status(400).json({ message: "Product ID is required" });
      }
  
      // Find the product by ID
      let product = await Product.findById(id);
  
      // Check if the product with the provided ID exists
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Update the product fields based on the provided updates
      for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
          product[key] = updates[key];
        }
      }
  
      // Save the updated product to the database
      product = await product.save();
      console.log("Updated Product :",product)
  
      // Return the updated product as response
      res.status(200).json({message:"Product updated successfully",product});
    } catch (error) {
      // Handle any errors that occur during product update
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Failed to update product" });
    }
  };

  export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params; // Extract the product ID from the request parameters
  
      // Check if the provided ID is valid
      if (!id) {
        return res.status(400).json({ message: "Product ID is required" });
      }
  
      // Find the product by ID and delete it
      const deletedProduct = await Product.findByIdAndDelete(id);
      console.log("Product Deleted Successfully",deletedProduct)

  
      // Check if the product with the provided ID exists
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      // Return the deleted product as response
      res.status(200).json({message:"Product Deleted Successfully",deletedProduct});
    } catch (error) {
      // Handle any errors that occur during product deletion
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Failed to delete product" });
    }
  };