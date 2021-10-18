import * as actionTypes from "../utils/actionTypes";
import { CommandManager } from "../utils/classes/command-manager";
import { ValueManager } from "../utils/classes/value-manager";
import { PlusCommand } from "../utils/classes/plus-command";
import { MinusCommand } from "../utils/classes/minus-command";
import { MultiplyCommand } from "../utils/classes/multiply-command";
import { DevideCommand } from "../utils/classes/devide-command";
import { FirstValue } from "../utils/classes/first-value";

const initialAppState = {
  nowOperator: "",
  valueManager: new ValueManager(),
  commandManager: new CommandManager(),
};

const calculator = (state = initialAppState, action) => {
  const calcFac = {};
  calcFac["PLUS"] = () => {
    const command = new PlusCommand(state.valueManager.value);
    return command;
  };
  calcFac["MINUS"] = () => {
    const command = new MinusCommand(state.valueManager.value);
    return command;
  };
  calcFac["MULTIPLY"] = () => {
    const command = new MultiplyCommand(state.valueManager.value);
    return command;
  };
  calcFac["DEVIDE"] = () => {
    const command = new DevideCommand(state.valueManager.value);
    return command;
  };

  if (calcFac.hasOwnProperty(action.type)) {
    let command;
    if (state.nowOperator === "") {
      command = new FirstValue(state.valueManager.value);
    } else {
      command = calcFac[state.nowOperator]();
    }
    state.commandManager.addCommand(command);
    state.commandManager.showingResult = true;
    state.valueManager.value = 0;
    state.nowOperator = action.type;
    return { ...state };
  } else {
    switch (action.type) {
      case actionTypes.INPUT_NUMBER:
        state.commandManager.showingResult = false;
        state.valueManager.inputValue(action.number);
        return { ...state };

      case actionTypes.CLEAR:
        state.valueManager.value = 0;
        state.commandManager.showingResult = false;
        return { ...state };

      case actionTypes.EQUAL:
        state.commandManager.addCommand(calcFac[state.nowOperator]());
        state.commandManager.showingResult = true;
        state.valueManager.value = 0;
        return { ...state };

      case actionTypes.UNDO:
        state.commandManager.undo();
        return { ...state };

      case actionTypes.REDO:
        state.commandManager.redo();
        return { ...state };

      default:
        return state;
    }
  }
};

export default calculator;
