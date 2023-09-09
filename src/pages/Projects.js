import React from 'react'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Started from '../components/Started'
import img from '../externals/imgs/bg-05-free-img.jpg'
import img1 from '../externals/imgs/img-06-free-img.jpg'
import img2 from '../externals/imgs/img-07-free-img.jpg'
import img3 from '../externals/imgs/img-08-free-img.jpg'
import img4 from '../externals/imgs/img-09-free-img.jpg'
import MobileNav from '../components/MobileNav'
function Projects({f,v}) {
  return (
   <div className="projects-p">
    <MobileNav v={v}/>
    <Background text={"PROJECTS"} img = {img} f={f}/>
    <div className='py-20 xl:mx-32 lg:mx-28 md:mx-24 mx-16 grid sm:grid-cols-2 gap-12'>
        <div className='lg:text-left text-center'>
        <img src={img1}alt="" className='sm:w-auto w-full'/>
        <h2 className='text-2xl font-bold my-4'>Look Deep Into Nature</h2>
        <p className='text-[grey] text-[17px] leading-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
        </div>
        <div className='lg:text-left text-center'>
        <img src={img2}alt="" className='sm:w-auto w-full'/>
        <h2 className='text-2xl font-bold my-4'>Just Living Is Not Enough</h2>
        <p className='text-[grey] text-[17px] leading-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
        </div>
        <div className='lg:text-left text-center'>
        <img src={img3}alt="" className='sm:w-auto w-full'/>
        <h2 className='text-2xl font-bold my-4'>Adopt the pace of Nature</h2>
        <p className='text-[grey] text-[17px] leading-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
        </div>
        <div className='lg:text-left text-center'>
        <img src={img4}alt="" className='sm:w-auto w-full'/>
        <h2 className='text-2xl font-bold my-4'>Go Along With the Nature</h2>
        <p className='text-[grey] text-[17px] leading-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
        </div>
    </div>
    <Started/>
    <Footer/>
   </div>
  )
}

export default Projects
