import React from 'react'
import '../styles/pages/_service.scss'
import Background from '../components/Background'
import img from '../externals/imgs/bg-04-free-img.jpg'
import img1 from '../externals/imgs/img-04-free-img.jpg'
import img2 from '../externals/imgs/sn-man-jumping.jpg'
import Started from '../components/Started'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
function Services({f,v}) {
  return (
    <div className="services-p">
        <MobileNav v={v}/>
        <Background text={'SERVICES'} img={img} f={f}/>
        <div className="do grid lg:grid-cols-2 xl:mx-32 mx-28 py-24 gap-24">
            <div>
                <h3 className='text-2xl font-bold'>What We Do</h3>
                <h2 className='text-4xl font-bold mt-4'>We Make Nature Smile</h2>
                <p className='text-[grey] mt-5 text-[17px]'>I lead projects from start to finish. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <p className='text-[grey] mt-8 text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='grid lg:grid-cols-2 '>
                <div><img src={img1} alt=""  className='object-cover w-full h-[260px] lg:h-full'/></div>
                <div><img src={img2} alt="" className='object-cover w-full h-[260px] lg:h-[85%] ' /></div>
            </div>
        </div>
        <div className='text-center py-24 xl:mx-32 mx-28'>
        <h3 className='text-2xl font-bold'>Services</h3>
        <h2 className='text-4xl font-bold mt-4'>Go along With Nature</h2>
        <div className='grid sm:grid-cols-2 mt-14 xl:gap-x-52 gap-y-6 gap-x-24'>
            <div className='pb-7 border-b '>
                <h2 className='text-2xl'>Autumn Is a Second Spring</h2>
                <p className='text-[grey] mt-5 text-[17px] pr-3 text-left'>LProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
            <div className='pb-7 border-b sm:mt-0 mt-6'>
                <h2 className='text-2xl'>Study Nature, Love Nature</h2>
                <p className='text-[grey] mt-5 text-[17px]  pr-3 text-left'>LProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
            <div className='sm:mt-0 mt-6 sm:border-b-0 border-b sm:pb-0 pb-7'>
                <h2 className='text-2xl'>Look Deep Into Nature</h2>
                <p className='text-[grey] mt-5 text-[17px]  pr-3 text-left'>LProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
            <div className='sm:mt-0 mt-6'>
                <h2 className='text-2xl'>Just Let It Rain</h2>
                <p className='text-[grey] mt-5 text-[17px]  pr-3 text-left'>LProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
        </div>
        </div>
        <Started/>
        <Footer/>
    </div>
  )
}

export default Services
