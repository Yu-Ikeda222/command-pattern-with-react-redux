import * as actionTypes from "../utils/actionTypes";

export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});

export const onMinusClick = () => ({
  type: actionTypes.MINUS,
});

export const onMultiplyClick = () => ({
  type: actionTypes.MULTIPLY,
});

export const onDivideClick = () => ({
  type: actionTypes.DIVIDE,
});

export const onEqualClick = () => ({
  type: actionTypes.EQUAL,
});

export const onClearClick = () => ({
  type: actionTypes.CLEAR,
});

export const onUndoClick = () => ({
  type: actionTypes.UNDO,
});

export const onRedoClick = () => ({
  type: actionTypes.REDO,
});
