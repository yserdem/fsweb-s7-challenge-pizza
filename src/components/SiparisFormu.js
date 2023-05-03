import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UrunAciklamasi from './UrunAciklamasi';
import RadioButtonInput from './RadioButtonInput';
import KalinlikDropdownMenu from './KalinlikDropdownMenu';
import EkMalzemelerCheckBox from './EkMalzemelerCheckBox';
import SiparisNotuInput from './SiparisNotuInput';
import QuantityChange from './QuantityChange';

const SiparisFormu = () => {
  const [size, setSize] = useState('');
  const [crustThickness, setCrustThickness] = useState('');
  const [toppings, setToppings] = useState([]);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const orderDetails = { size, crustThickness, toppings, notes, quantity };
    history.push('/SiparisAlindi', { orderDetails });
  }

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleCrustThicknessChange = (event) => {
    setCrustThickness(event.target.value);
  };

  const handleToppingsChange = (newToppings) => {
    setToppings(newToppings);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    };
  };

  return (
    <div>
      <div className="siparis-formu_header">
        <h1>Teknolojik Yemekler</h1>
        <h3>Anasayfa - Seçenekler - Sipariş Oluştur</h3>
      </div>
      <div className='siparis-formu_body'>
        <UrunAciklamasi />
        <form onSubmit={handleSubmit}>
          <div className='size-and-crust'>
            <div className='radio-choose-size'>
              <RadioButtonInput
                id="small"
                name="size"
                label="Boyut Seç"
                value="Small"
                onChange={handleSizeChange}
                labelClassName="label-font"
              />
              <RadioButtonInput
                id="medium"
                name="size"
                label=""
                value="Medium"
                onChange={handleSizeChange}
                labelClassName=""
              />
              <RadioButtonInput
                id="large"
                name="size"
                label=""
                value="Large"
                onChange={handleSizeChange}
                labelClassName=""
              />
            </div>
            <KalinlikDropdownMenu
              value={crustThickness}
              onChange={handleCrustThicknessChange}
              className="crust-thickness"
              labelClassName="label-font"
            />
          </div>
          <div className='toppings'>
            <p className='toppings_header'>Ek Malzemeler</p>
            <label className='toppings_header_label'>En Fazla 10 malzeme seçebilirsiniz. 5TL</label>
            <EkMalzemelerCheckBox values={toppings} onChange={handleToppingsChange} />
          </div>
          <SiparisNotuInput value={notes} onChange={handleNotesChange} />
          <div className='form-bottom-div'>
            <div>
              <QuantityChange
                value={quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease} />
            </div>
            <div className='order-final-container'>
              <div className='order-finalize'>
                <h2 className='siparis-toplami'>Sipariş Toplamı</h2>
                <div className='secimler'>
                  <p>Seçimler </p>
                  <p>{(toppings.length * 5) * quantity}</p>
                </div>
                <div className='toplam-fiyat'>
                  <p>Toplam </p>
                  <p>{(85.50 + toppings.length * 5) * quantity}</p>
                </div>
              </div>
              <button type="submit" className='button-finalize-order'>SİPARİŞ VER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiparisFormu;