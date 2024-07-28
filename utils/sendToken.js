export const sendToken = (res, statusCode, accessToken, sendData) => {
  res
    .status(statusCode)
    .cookie("token", accessToken, {
      ...cookieOptions,
      expires: new Date(Date.now() + 15 * 60 * 1000),
    })
    .json(sendData);
};
// export const cookieOptions = {
//   secure: true,
//   httpOnly: true,
//   sameSite: "none",
// };
export const cookieOptions = {
  secure: process.env.NODE_ENV === "Development" ? false : true,
  httpOnly: process.env.NODE_ENV === "Development" ? false : true,
  sameSite: process.env.NODE_ENV === "Development" ? false : "none",
};
