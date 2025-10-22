import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {         /* no refresment of page*/
        event.preventDefault();
    }
  return (
    <div className='letter-box'>
      <h3>Subscribe now & get 20% off</h3>
      <p>Subscribe for weekly fashion tips and 20% off at your first order.</p>
      <form onSubmit={onSubmitHandler}>
         <input type="text" placeholder='Enter your email' required/>
         <button type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox;
