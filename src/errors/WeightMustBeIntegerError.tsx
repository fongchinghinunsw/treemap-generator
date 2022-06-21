class WeightMustBeIntegerError extends Error {
  name = "WeightMustBeIntegerError";
  constructor() {
    var msg = "The weight attribute of each object must be of type integer";
    super(msg);
    Object.setPrototypeOf(this, WeightMustBeIntegerError.prototype);
  }
}

export default WeightMustBeIntegerError;
