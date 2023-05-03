import { useLocation } from 'react-router-dom';
import React from 'react';

function SiparisAlindi() {
  const { state } = useLocation();
  const { orderDetails } = state;

  return (
    <div className='success'>
      <h1>Teknolojik Yemekler</h1>
      <p className='stylizedFont'>lezzetin yolda</p>
      <h2>SİPARİŞ ALINDI </h2>
      <div className='success_details'>
        <h3>Position Absolute Acı Pizza</h3>
        <p>Boyut: {orderDetails.size}</p>
        <p>Hamur: {orderDetails.crustThickness}</p>
        <p>Ek Malzemeler: {orderDetails.toppings.map((topping, index) => <span key={index}>{topping}, </span>)}</p>
      </div>

      <div className='succes_total'>
        <h3>Sipariş Toplamı</h3>
        <div>
          <p>Seçimler</p>
          <p> {orderDetails.toppings.length * 5 * orderDetails.quantity} </p>
        </div>
        <div>
          <p>Toplam</p>
          <p> {(85.50 + orderDetails.toppings.length * 5) * orderDetails.quantity} </p>
        </div>
      </div>
      
    </div>
  );
}

export default SiparisAlindi;





