class ValueMustBeNumberError extends Error {
  name = "ValueMustBeNumberError";
  constructor() {
    var msg = "The value attribute of each object must be of type number";
    super(msg);
    Object.setPrototypeOf(this, ValueMustBeNumberError.prototype);
  }
}

export default ValueMustBeNumberError;
