import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";

import * as actions from "./actions";
import NumBtn from "./components/NumBtn";
import OperatorBtn from "./components/OperatorBtn";
import Result from "./components/Result";

class App extends Component {
  render() {
    const { calculator, actions } = this.props;
    console.log("commandManager", calculator.valueManager);
    console.log("commandManager", calculator.commandManager);

    return (
      <>
        <div className="wrapper" style={{ width: "50%", margin: "100px auto" }}>
          <div className="result">
            <Result
              result={
                calculator.commandManager.showingResult
                  ? calculator.commandManager.execute()
                  : calculator.valueManager.value
              }
            />
          </div>
          <div className="wrapper">
            <div className="number">
              <div className="numUpper">
                <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
                <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
                <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
              </div>
              <div className="numMiddle">
                <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
                <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
                <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
              </div>
              <div className="numLower">
                <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
                <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
                <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
              </div>
              <div className="zero">
                <NumBtn n={0} />
                <span className="allClear">
                  <OperatorBtn
                    o={"AC"}
                    onClick={() => actions.onClearClick()}
                  />
                </span>
                <span className="equal">
                  <OperatorBtn o={"="} onClick={() => actions.onEqualClick()} />
                </span>
              </div>
            </div>
            <div className="operator">
              <OperatorBtn o={"÷"} onClick={() => actions.onDivideClick()} />
              <OperatorBtn o={"×"} onClick={() => actions.onMultiplyClick()} />
              <OperatorBtn o={"-"} onClick={() => actions.onMinusClick()} />
              <OperatorBtn o={"+"} onClick={() => actions.onPlusClick()} />
            </div>
            <div className="do">
              <OperatorBtn o={"undo"} onClick={() => actions.onUndoClick()} />
              <OperatorBtn o={"redo"} onClick={() => actions.onRedoClick()} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
