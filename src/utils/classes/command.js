import { PlusCommand } from "./plus-command";
import { MinusCommand } from "./minus-command";
import { MultiplyCommand } from "./multiply-command";
import { DevideCommand } from "./devide-command";
import { FirstValue } from "./first-value";

export const Command = class {
  constructor() {
    this.value = 0;
    this.nowOperator = "";
  }

  inputValue(inputValue) {
    this.value = this.value * 10 + inputValue;
  }

  createCommand(operator) {
    if (this.nowOperator === "PLUS") {
      const command = new PlusCommand(this.value);
      this.value = 0;
      this.nowOperator = operator;
      return command;
    } else if (this.nowOperator === "MINUS") {
      const command = new MinusCommand(this.value);
      this.value = 0;
      this.nowOperator = operator;
      return command;
    } else if (this.nowOperator === "MULTIPLY") {
      const command = new MultiplyCommand(this.value);
      this.value = 0;
      this.nowOperator = operator;
      return command;
    } else if (this.nowOperator === "DIVIDE") {
      const command = new DevideCommand(this.value);
      this.value = 0;
      this.nowOperator = operator;
      return command;
    } else if (this.nowOperator === "") {
      const command = new FirstValue(this.value);
      this.value = 0;
      this.nowOperator = operator;
      return command;
    }
  }
};
