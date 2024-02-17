import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-16 h-16 border-4 border-gray-300 rounded-full animate-spin"></div>
  </div>
  
  )
}

export default Spinner
