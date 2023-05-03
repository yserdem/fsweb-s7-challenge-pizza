import React from 'react';

const UrunAciklamasi = () => {
  return (
    <div className='urun-aciklamasi'>
      <h3>Position Absolute Acı Pizza</h3>
      <div className='product_details'>
        <p className='product_price'>85.50₺</p>
        <p className='product_review'>4.9</p>
        <p className='product_review_number'>(200)</p>
      </div>
      <div>
        <p className='product_explanation'>
          Frontend Dev olarak hala position: absolute kullanıyorsan Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Vestibulum sagittis nisi ac augue finibus, eget semper libero efficitur. 
          Fusce maximus tortor in velit bibendum, ac ultricies quam pharetra. Nullam vitae risus vel turpis 
          ultrices vestibulum. Pellentesque vel eleifend diam. In nec magna quis metus ornare placerat.
        </p>
      </div>
    </div>
  );
};

export default UrunAciklamasi;
