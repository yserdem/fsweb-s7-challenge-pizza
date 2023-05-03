import React from 'react';

const RadioButtonInput = ({ id, name, label, value, onChange, labelClassName }) => {
  return (
    <div>
      <label htmlFor={id} className={labelClassName} >{label}</label>
      <br />
      <input type="radio" id={id} name={name} value={value} onChange={onChange} />
      <label htmlFor={id}>{value}</label>
      <br />
    </div>
  );
};

export default RadioButtonInput;
