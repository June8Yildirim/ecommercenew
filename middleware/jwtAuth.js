import jwt from "jsonwebtoken";

export const JwtAuthMiddleWare = (req, res, next) => {
  const token = req.cookies.accessToken;

  try {
    if (!token) {
      throw {
        status: 403,
        message: "User not authorized",
      };
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) throw { status: 403, message: "Verification failed" };
      req.user = user;
      next();
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
