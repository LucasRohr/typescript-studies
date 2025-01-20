export class NotFoundError extends Error {
  constructor(stack?: string) {
    super("Not Found Error");
    this.name = "NotFoundError";
    this.stack = stack;
  }
}
