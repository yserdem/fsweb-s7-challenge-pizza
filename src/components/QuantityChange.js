import React from "react";

function QuantityPicker(props) {
  const { value, onIncrease, onDecrease } = props;

  function handleIncrease(event) {
    event.preventDefault();
    onIncrease();
  }

  function handleDecrease(event) {
    event.preventDefault();
    if (value > 1) {
      onDecrease();
    }
  }

  return (
    <div>
      <button onClick={handleDecrease} className="quantity-button">-</button>
      <input type="text" value={value} readOnly className="quantity-text"/>
      <button onClick={handleIncrease} className="quantity-button">+</button>
    </div>
  );
}

export default QuantityPicker;
