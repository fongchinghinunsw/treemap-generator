class NameMustBeStringError extends Error {
  name = "NameMustBeStringError";
  constructor() {
    var msg = "The name attribute of each object must be of type string";
    super(msg);
    Object.setPrototypeOf(this, NameMustBeStringError.prototype);
  }
}

export default NameMustBeStringError;
