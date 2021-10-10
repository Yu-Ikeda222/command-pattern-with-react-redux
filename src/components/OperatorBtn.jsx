import React from "react";

const OperatorBtn = ({ o, onClick }) => {
  return <button onClick={onClick}>{o}</button>;
};

export default OperatorBtn;
