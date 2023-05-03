import React from 'react';

const KalinlikDropdownMenu = ({ value, onChange, className, labelClassName }) => {
  return (
    <div className={className}>
      <label htmlFor="crustThickness" className={labelClassName}>Hamur Seç:</label>
      <div style={{ display: 'flex' }}>
      <select id="crustThickness" name="crustThickness" value={value} onChange={onChange}>
        <option value="" disabled hidden>Hamur Kalınlığı</option>
        <option value="Thin">İnce</option>
        <option value="Thick">Kalın</option>
        <option value="Stuffed">Peynir Dolgulu</option>
      </select>
      </div>
    </div>
  );
};

export default KalinlikDropdownMenu;
