export const ValueManager = class {
  constructor() {
    this.value = 0;
  }

  inputValue(inputValue) {
    this.value = this.value * 10 + inputValue;
  }
};
