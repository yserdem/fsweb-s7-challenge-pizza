import React from "react";

const SiparisNotuInput = ({ value, onChange }) => {
  return (
    <div className="siparis-notu">
      <label htmlFor="notesInput" className="siparis-notu-label">Sipariş Notu</label>
      <br />
      <textarea
        id="notesInput"
        className="form-control"
        rows="2"
        cols="50"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default SiparisNotuInput;
