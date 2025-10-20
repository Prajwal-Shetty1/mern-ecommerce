import React from 'react'

const Title = ({text1 , text2}) => {
  return (
    <div className='title-heading'>
      <p>{text1} <span>{text2}</span></p>
    </div>
  )
}

export default Title;
