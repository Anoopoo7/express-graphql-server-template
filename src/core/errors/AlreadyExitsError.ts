export default class AlreadyExistsError extends Error {
  status: number = 409;
  code: string = "CONFLICT";
  stacktrace: string[] = [];

  constructor(message: string) {
    super(message);
    this.status = 409;
    Object.setPrototypeOf(this, AlreadyExistsError.prototype);
  }
}
