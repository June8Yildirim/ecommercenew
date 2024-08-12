import { asyncErrorHandler } from "../middleware/Error.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createCategory = asyncErrorHandler(async (req, res, next) => {
  const { category } = req.body;
  if (!category) return next(new ErrorHandler("Category not provided"), 403);
  const cat = await Category.create({ category });
  res.status(201).json({ message: "Category is created", category: cat });
});

export const getAllCategories = asyncErrorHandler(async (req, res, next) => {
  const categories = await Category.find({});
  res.status(200).json({ categories });
});

export const getCategory = asyncErrorHandler(async (req, res, next) => {
  const categoryId = req.params;

  if (!categoryId)
    return next(new ErrorHandler("Category id not provided"), 403);
  const category = await Category.findById(categoryId);
  if (!category) return next(new ErrorHandler("Category not found"), 404);

  res.status(201).json({ category });
});

export const updateCategory = asyncErrorHandler(async (req, res, next) => {
  const categoryId = req.params;

  if (!categoryId)
    return next(new ErrorHandler("Category id not provided"), 403);
  const category = await Category.findByIdAndUpdate(categoryId);
  if (!category) return next(new ErrorHandler("Category not found"), 404);
  res.status(201).json({ message: "Category is updated" });
});

export const deleteCategory = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!id) return next(new ErrorHandler("Category id not provided"), 403);
  const category = await Category.findOneAndDelete(id);
  if (!category) return next(new ErrorHandler("Category not found"), 404);
  const products = await Product.find({ categoryId: id });
  //FIX: look carefully does not do undefined
  products.forEach((product) => {
    const categoryUpd = Product.findByIdAndUpdate(
      product._id,
      {
        categoryId: undefined,
      },
      { new: true, upsert: true },
    );
    console.log(categoryUpd);
  });
  res.status(201).json({ message: "Category is deleted" });
});
