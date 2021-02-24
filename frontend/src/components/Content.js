import React from 'react';
import ImageOne from '../images/ring1.jpg';
import ImageTwo from '../images/ring2.jpg';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='ring' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Basic</h2>
          <p className='mb-2'>Diamond ring 18k</p>
          <span>$1500</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='ring' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Premium</h2>
          <p className='mb-2'>Diamond ring 24k</p>
          <span>$2000</span>
        </div>
      </div>
    </>
  );
};

export default Content;