import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import Footer from '../components/Footer'
import '../styles/pages/_contact.scss'
import img from '../externals/imgs/bg-08-free-img.jpg'
import MobileNav from '../components/MobileNav'
function Contact({f,v}) {
  const [clicked , setClicked] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');
  const [isFocused,setIsFocused] = useState(false);
  const [allChecked, setChecked] = useState(false);
  function goTop()
  {
    document.documentElement.scrollTo({
      top: 0
    })
  }
  const checkValid = () =>{
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
  /* (() => {
      console.log(usestate,value);
      usestate(value);
    })();*/
    const handleFocus = () =>
    {
      setIsFocused(true);
      setTimeout(()=>{
        setIsFocused(false);
      },200)
    }
  function check(setfunction, v) {
      if(setfunction === 'setName')
        setName(v);
      else if(setfunction === 'setEmail')
        setEmail(v);
      else if(setfunction === 'setSubject')
        setSubject(v);
      else
        setMessage(v);
  }
  useEffect(()=>{
    
  },[name]);
  function err()
  {
    setClicked(true);
    if(name!==''&&message!==''&&subject!=='' && checkValid())
       setChecked(true);
  }
  return (
   <div className="contact-p relative">
    <MobileNav v={v}/>
    <Background text={'CONTACT'} img={img} f={f}/>
    <div className='xl:mx-36 lg:mx-28 sm:mx-20 mx-8 py-20 grid md:grid-cols-2 lg:gap-28 gap-10'>
    <div>
    <h2 className='text-4xl font-bold mb-4 text-center xs:text-left'>Contact Us</h2>
    <p className='text-gray-600 text-[16px] leading-6 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
    <ul className='m-10 info'>
        <li onClick={goTop} className='cursor-pointer'><i className="fa-solid fa-location-dot mr-7"></i>12 Avenue, New York, NY 10160</li>
        <li onClick={goTop} className='cursor-pointer'><i className="fa-regular fa-envelope mr-7 mt-5"></i>contact@nature.com</li>
        <li onClick={goTop} className='cursor-pointer'><i className="fa-solid fa-phone-flip mr-7 mt-5"></i>1111-333-44444</li>
    </ul>
    <h2 className='text-3xl font-bold mb-6 text-center xs:text-left'>Follow Us</h2>
    <ul className='flex justify-center xs:justify-normal'>
    <li className='rounded-full bg-[#D94948] w-8 h-8 flex items-center justify-center mr-5 cursor-pointer'><i className="fa-brands fa-facebook-f text-white"></i></li>
    <li className='rounded-full bg-[#D94948] w-8 h-8 flex items-center justify-center mr-5 cursor-pointer'><i className="fa-brands fa-twitter text-white"></i></li>
    <li className='rounded-full bg-[#D94948] w-8 h-8 flex items-center justify-center mr-5 cursor-pointer'><i className="fa-brands fa-youtube text-white"></i></li>
    <li className='rounded-full bg-[#D94948] w-8 h-8 flex items-center justify-center mr-5 cursor-pointer'><i className="fa-brands fa-telegram text-white"></i></li>
    </ul>
    </div>
    {
      (allChecked)? <p className='text-gray-600 text-[16px] leading-6 md:mt-14 font-light'>Thanks for contacting us! We will be in touch with you shortly.</p>
      :
      <div className=''>
      <label htmlFor="Name" className='font-bold text-[#224869]'>Your Name <span className='text-red-500'>*</span></label><br/>
      <input type="text" id='Name' onFocus={handleFocus} aria-describedby="formats error" onKeyUp={(e) => check('setName', e.target.value)}
      className={`rounded-sm border-none w-full h-10 my-1 px-3
       ${(clicked && name === '')? ' outline-red-600 outline-1 focus:outline-none':''} 
       ${isFocused?'focus:outline focus:outline-2' : 'outline-none'}
       `}/>
       {
        (clicked && name ==='') &&
        <span className='mb-5 text-[15px] text-[#990000] font-light block' id='error'>This field is required.</span>
       }
      <label htmlFor="Email" className='font-bold text-[#224869]'>Email <span className='text-red-500'>*</span></label><br/>
      <input type="text" id='Email' onFocus={handleFocus} aria-describedby="formats error" onKeyUp={(e) => check('setEmail', e.target.value)}
      className={`rounded-sm border-none w-full h-10  my-1 px-3
      ${(clicked && email === '')&& ' outline-red-600 outline-1 focus:outline-none'} 
      ${isFocused?'focus:outline focus:outline-2' : 'outline-none'}
      `}/>
     {
        (clicked && email ==='') &&
       <span className='mb-5 text-[15px] text-[#990000] font-light block' id='error'>This field is required.</span>
     }
      {
      (email!==''&& !checkValid()) &&
      <span className='mb-5 text-[15px] text-[#990000] font-light block' id='error'>Please enter a valid email address</span>
     }
      <label htmlFor="subject" className='font-bold text-[#224869]'>Subject <span className='text-red-500'>*</span></label><br/>
      <input type="text" id='subject' onFocus={handleFocus} aria-describedby="formats error" onKeyUp={(e) => check('setSubject', e.target.value)}
      className={`rounded-sm border-none w-full h-10  my-1 px-3
      ${(clicked && subject === '') && ' outline-red-600 outline-1 focus:outline-none'} 
      ${isFocused?'focus:outline focus:outline-2' : 'outline-none'}
      `}
      />
     {
      (clicked && subject ==='') &&
       <span className='mb-5 text-[15px] text-[#990000] font-light block' id='error'>This field is required.</span>
     }
      <label htmlFor="message" className='font-bold text-[#224869]'>Your Message <span className='text-red-500'>*</span></label><br/>
      <textarea  id="message" onFocus={handleFocus} aria-describedby="formats error" onKeyUp={(e) => check('setMessage', e.target.value)}
      className={`rounded-sm border-none w-full h-[200px]  my-1 p-3
      ${(clicked && message === '')&&' outline-red-600 outline-1 focus:outline-none'} 
      ${isFocused?'focus:outline focus:outline-2' : 'outline-none'}
     
      `}
      ></textarea>
    {
      (clicked && message ==='') &&
      <span className='mb-5 text-[15px] text-[#990000] font-light block' id='error'>This field is required.</span>
    }
      <input onClick={err} placeholder='SEND MESSAGE'  readOnly
      className= {` caret-transparent bg-[#D94948] hover:bg-[#E93333] text-[15px] placeholder:text-white font-bold w-[157px] px-[20px] py-[10px] rounded-3xl mt-3 cursor-pointer outline-none `}  />
  <form action={email}></form>
  </div>
    }
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24184.116213921177!2d-73.99392276930456!3d40.739705871389326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590e89351307%3A0xa5212a2808ea294!2sAlexandria%20Real%20Estate%20Equities!5e0!3m2!1sen!2seg!4v1694068151060!5m2!1sen!2seg" className='h-[400px] w-full'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <Footer/>
   </div>
  )
}

export default Contact
