import React from 'react'
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <>
    <div className='our-policy'>
    <div>
      <img src={assets.exchange_icon} alt="" />
      <h4>Easy Exchange Policy</h4>
      <p>We offer hassle free exchange policy</p>
    </div>
    <div>
      <img src={assets.quality_icon} alt="" />
      <h4>7 Days Return Policy</h4>
      <p>We offer 7 days free return policy</p>
    </div>
    <div>
      <img src={assets.support_img} alt="" />
      <h4>Best Customer Support</h4>
      <p>We offer 24/7 customer support</p>
    </div>
    </div>
    </>
  )
}

export default OurPolicy;
