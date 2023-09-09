import React from 'react'
import '../styles/components/_button.scss'
function Button({text}) {
  function goTop()
  {
    if(text==='Learn More')
    {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    
  }
  return (
    <div className="button">
     <button onClick={goTop}>{text}</button>
   </div>
  )
}

export default Button
