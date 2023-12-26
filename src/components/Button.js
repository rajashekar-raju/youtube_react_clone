import React from 'react'

const Button = ({name}) => {
  return (
    <div className='ml-5 snap-center inline-block'>
        <button className=' px-5 py-2 bg-[#f0f0f0] rounded-lg'>{name}</button> 
    </div>
  )
}

export default Button

// not able to give space in between name of button -> use inline block not give display as flex 
// what is snap-center property not understood