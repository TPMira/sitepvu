import React from 'react'

function ButtonCustom() {
  return (
    <button 
        type='submit'
        className='bg-yellow-300 text-black text-lg px-4 mt-2  border-2 border-gray-900 hover:border-2 hover:border-yellow-300 rounded-xl font-semibold hover:bg-gray-900 hover:text-yellow-300'
    >
        Submit
    </button>
  )
}

export default ButtonCustom