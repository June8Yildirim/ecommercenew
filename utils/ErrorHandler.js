export default class ErrorHandler extends Error {
  statusCode;
  constructor(errMessage, statusCode) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}
