import { asyncErrorHandler } from "../middleware/Error.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import { getDataUri } from "../utils/dataUri.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import cloudinary from "cloudinary";

export const createProduct = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.user;
  const { title, description, price, quantity, stock } = req.body;
  if (!title || !description || !price || !quantity || !stock)
    return next(
      new ErrorHandler(
        "Please provide necessary fields to create new product",
        403,
      ),
    );

  if (!id)
    return next(
      new ErrorHandler("The owner of product does not provided"),
      403,
    );

  //save images
  let productImage = undefined;
  if (req.file) {
    const file = getDataUri(req.file);
    const image = await cloudinary.v2.uploader.upload(file.content);
    productImage = {
      url: image.secure_url,
      public_id: image.public_id,
    };
  }
  // TODO: else condition add default product image
  const product = await Product.create({
    ...req.body,
    images: [productImage],
    owner: id,
  });
  //
  res.status(201).json({ message: "Product created" });
});

export const getAdminProducts = asyncErrorHandler(async (req, res, next) => {
  const products = await Product.find({}).populate("categoryId");
  const outOfStockProducts = products.filter((product) => product.stock === 0);
  res.status(201).json({
    products,
    outOfStock: outOfStockProducts.length,
    instock: products.length - outOfStockProducts.length,
  });
});

export const getAllProducts = asyncErrorHandler(async (req, res, next) => {
  const { query, category } = req.query;
  const products = await Product.find({
    $or: [
      {
        name: {
          $regex: query ? query : "",
          $options: "i",
        },
      },
      {
        category: category ? category : undefined,
      },
    ],
  });
  res.status(201).json({ products });
});

export const getProductDetails = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ErrorHandler("Product id not provided"), 403);
  const product = await Product.findById(id);
  if (!product) return next(new ErrorHandler("product not found"), 403);
  res.status(201).json({ product });
});

export const updateProduct = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.param;
  if (!id) return next(new ErrorHandler("Product id not provided"), 403);
  const product = await Product.findById(id);
  if (!product) return next(new ErrorHandler("product not found"), 403);
  let productImage = undefined;
  if (req.file) {
    const file = getDataUri(req.file);
    const image = await cloudinary.v2.uploader.upload(file.content);
    productImage = {
      url: image.secure_url,
      public_id: image.public_id,
    };
  }
  console.log("============");
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true, upsert: true },
  );
  console.log(updatedProduct);
  const { images } = updatedProduct;
  updateProduct.images = [...images, productImage];
  res.status(201).json({ product });
});
export const deleteProduct = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.param;
  if (!id) return next(new ErrorHandler("Product id not provided"), 403);
  const product = await Product.findById(id);
  if (!product) return next(new ErrorHandler("product not found"), 403);
  product.images.forEach((image) =>
    cloudinary.v2.uploader.destroy(image.public_id),
  );
  await Product.findByIdAndDelete(id);
  res.status(201).json({ message: "Product is removed successfully" });
});

export const updateImage = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.param;
  if (!id) return next(new ErrorHandler("Product id not provided"), 403);
  const product = await Product.findById(id);
  if (!product) return next(new ErrorHandler("product not found"), 403);
  let productImage = undefined;
  if (req.file) {
    const file = getDataUri(req.file);
    const image = await cloudinary.v2.uploader.upload(file.content);
    productImage = {
      url: image.secure_url,
      public_id: image.public_id,
    };
  }
  const { images } = product;
  product.images = [...images, productImage];
  product.save();
  res.status(201).json({ product });
});

export const deleteImage = asyncErrorHandler(async (req, res, next) => {
  const { productId } = req.param;
  const imageId = req.query.public_id;
  if (!productId) return next(new ErrorHandler("Product id not provided"), 403);
  const product = await Product.findById(productId);
  if (!product) return next(new ErrorHandler("product not found"), 403);

  const id = -1;
  product.images.forEach((image, index) => {
    if (image.public_id.toString() === imageId.toString()) id = index;
  });
  await cloudinary.v2.uploader.destroy(product.images[id].public_id);
  product.images.slice(id, 1);
  product.save();
  res.status(201).json({ product });
});

export const addNewImages = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.param;
  if (!id) return next(new ErrorHandler("Product id not provided"), 403);
  const product = await Product.findById(id);
  if (!product) return next(new ErrorHandler("product not found"), 403);
  if (!req.file) return next(new ErrorHandler("Image not found"), 403);

  let productImage = undefined;
  if (req.file) {
    const file = getDataUri(req.file);
    const image = await cloudinary.v2.uploader.upload(file.content);
    productImage = {
      url: image.secure_url,
      public_id: image.public_id,
    };
  }
  //FIX:
  product.images.push(productImage);
  await product.save();
  res.status(201).json({ product });
});
