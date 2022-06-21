class InputError extends Error {
  name = "InputError";
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, InputError.prototype);
  }
}

export default InputError;
