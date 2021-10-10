export const DevideCommand = class {
  constructor(value) {
    this.value = value;
  }

  calculate(result) {
    result = result / this.value;
    return result;
  }
};
