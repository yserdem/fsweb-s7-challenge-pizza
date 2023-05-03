import React from 'react';
import { Link } from 'react-router-dom';

const Anasayfa = () => {
  return (
    <div className='homePage'>
      <h1>Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR 
        <br />
        PİZZA, DOYURUR
      </p>
      <Link to="/SiparisFormu">
        <button>ACIKTIM</button>
      </Link>
    </div>
  );
};

export default Anasayfa;