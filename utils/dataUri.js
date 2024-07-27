import DataURIParser from "datauri/parser.js";
import path from "path";
export const getDataUri = (file) => {
  const parser = new DataURIParser(file);
  const extname = path.extname(file.originalname).toString();
  return parser.format(extname, file.buffer);
};
