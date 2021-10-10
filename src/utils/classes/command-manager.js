export const CommandManager = class {
  constructor() {
    this.showingResult = false;
    this.commandList = [];
    this.cursor = 0;
    this.result = 0;
  }

  execute() {
    let result = 0;
    for (let i = 0; i < this.cursor; i++) {
      result = this.commandList[i].calculate(result);
    }
    return result;
  }

  addCommand(command) {
    this.commandList.push(command);
    this.cursor += 1;
  }

  undo() {
    if (this.cursor > 0) {
      this.cursor -= 1;
    } else {
      this.cursor = 0;
    }
  }

  redo() {
    if (this.cursor < this.commandList.length) {
      this.cursor += 1;
    } else {
    }
  }
};
