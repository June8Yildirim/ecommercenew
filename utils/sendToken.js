export const sendToken = (res, statusCode, tokens, sendData) => {
  res
    .status(statusCode)
    .cookie("token", tokens, {
      ...cookieOptions,
      expires: new Date(Date.now() + 15 * 60 * 1000),
    })
    .json(sendData);
};
export const cookieOptions = {
  secure: process.env.NODE_ENV === "Development" ? false : true,
  httpOnly: process.env.NODE_ENV === "Development" ? false : true,
  sameSite: process.env.NODE_ENV === "Development" ? false : "none",
};
