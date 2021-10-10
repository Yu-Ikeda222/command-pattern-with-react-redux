import * as actionTypes from "../utils/actionTypes";
import { CommandManager } from "../utils/classes/command-manager";
import { Command } from "../utils/classes/command";

const initialAppState = {
  commandClass: new Command(),
  commandManager: new CommandManager(),
};

const calculator = (state = initialAppState, action) => {
  // const showingResult = state.commandManager.input(action)
  // return {...state, showingResult}

  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      state.commandClass.inputValue(action.number);
      return { ...state };

    case actionTypes.PLUS:
      const PlusCommand = state.commandClass.createCommand(action.type);
      state.commandManager.addCommand(PlusCommand);
      state.commandManager.showingResult = true;
      return { ...state };

    case actionTypes.MINUS:
      const MinusCommand = state.commandClass.createCommand(action.type);
      state.commandManager.addCommand(MinusCommand);
      state.commandManager.showingResult = true;
      return { ...state };

    case actionTypes.MULTIPLY:
      const MutiplyCommand = state.commandClass.createCommand(action.type);
      state.commandManager.addCommand(MutiplyCommand);
      state.commandManager.showingResult = true;
      return { ...state };

    case actionTypes.DIVIDE:
      const DivideCommand = state.commandClass.createCommand(action.type);
      state.commandManager.addCommand(DivideCommand);
      state.commandManager.showingResult = true;
      return { ...state };

    case actionTypes.CLEAR:
      state.commandClass.value = 0;
      state.commandManager.showingResult = false;
      return { ...state };

    case actionTypes.EQUAL:
      const command = state.commandClass.createCommand("");
      state.commandManager.addCommand(command);
      state.commandManager.showingResult = true;
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
};

export default calculator;
