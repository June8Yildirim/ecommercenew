export const costCalculation = (cartItems, TAX_REGION) => {
  const subTotal =
    Math.round(
      cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0) *
        100,
    ) / 100;
  const shipping = subTotal > 2000 ? 400 : 100;
  const tax = Math.round((subTotal + shipping) * TAX_REGION * 100) / 100;
  const total = Math.round((subTotal + shipping + tax) * 100) / 100;
  return { total, tax, shipping, subTotal };
};
