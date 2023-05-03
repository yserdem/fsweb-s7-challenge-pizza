import React from 'react';

const TOPPINGS_LIST = [
    'Pepperoni',
    'Domates',
    'Biber',
    'Sosis',
    'Mısır',
    'Sucuk',
    'Kanada Jambonu',
    'Salam',
    'Ananas',
    'Tavuk Izgara',
    'Jalepeno',
    'Kabak',
    'Soğan',
    'Sarımsak'
];

const EkMalzemelerCheckBox = ({ values, onChange }) => {
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter((topping) => topping !== value));
    }
  };

  return (
    <div className="toppings-input">
      {TOPPINGS_LIST.map((topping) => (
        <label key={topping}>
          <input
            type="checkbox"
            name={topping}
            value={topping}
            checked={values.includes(topping)}
            onChange={handleCheckboxChange}
            className='toppings-input-checkbox'
          />
          {topping}
        </label>
      ))}
    </div>
  );
};

export default EkMalzemelerCheckBox;
