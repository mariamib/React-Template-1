import React, {useState} from 'react'
import './Footer'
import '../styles/components/_footer.scss'
function Footer() {
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', function(event){
        setWidth(window.innerWidth)
    });
  return (
   <footer className={width<1000?'p-12':'p-20 pb-10'}>
    <div className= {width<1000?"text-center max-w-xl  mx-auto":"section grid grid-cols-4 gap-3"}>
        <div className='col-span-2 lg:mt-0 mt-5'>
            <h3 className='mb-4 text-lg font-bold'>About</h3>
            <p className='mb-5'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit nam nec tellus a odio tincidunt auctor a ornare conubia nostra.</p>
        </div>
        <div className='col-span-1 mx-auto lg:mt-0 mt-5'>
        <h3 className='mb-4 text-lg font-bold'>Services</h3>
            <ul>
                <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>Study nature</li>
                <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>Nature is a gift</li>
                <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>A second spring</li>
                <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>Smiles of nature</li>
                <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>Just let it rain</li>
            </ul>
        </div>
        <div className='col-span-1 mx-auto lg:mt-0 mt-5'>
            <h3 className='mb-4 text-lg font-bold'>Contact</h3>
            <p className='mb-10'>Proin gravida nibh auctor aliquet amet anean sollicitudin, lorem quis.</p>
            <ul>
            <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>12 Avenue, New York, NY 10160</li>
            <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>+1 910-626-85255</li>
            <li className='mb-1 hover:text-[#D94948] hover:cursor-pointer transition ease-in-out delay-80 text-sm'>contact@nature.com</li>
            </ul>
        </div>
    </div>
    <div className="section flex justify-between mt-20">
    <span>Copyright © 2023 Sierra Nature</span> <span>Powered by Sierra Nature</span>
    </div>
   </footer>
  )
}

export default Footer
