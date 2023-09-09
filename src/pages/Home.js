import React , {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import img1 from '../externals/imgs/img-01-free-img.jpg'
import img2 from '../externals/imgs/img-02-free-img.jpg'
import '../styles/pages/_home.scss'
import Started from '../components/Started'
import MobileNav from '../components/MobileNav'
function Home({f,v}) {
        const [width, setWidth] = useState(window.innerWidth);
        window.addEventListener('resize', function(event){
            setWidth(window.innerWidth)
        });
  return (
   <div className="home">
    <MobileNav v ={v}/>
    <Navbar f ={f}/>
    <div className="section1 text-white text-center mx-auto w-fit font-[600]">
      <p>Welcome To</p>
      <h1 className='mb-9 mt-2'>SIERRA NATURAL PARK</h1>
      <Button text={'Learn More'}/>
      <i className="fa-solid fa-arrow-down-long mt-72 mb-20"></i>
    </div>
   
    <div className="about">
   <div className="section mx-auto text-center  py-32 ">
   <h3>About Us</h3>
    <h1 className='mb-10 mt-3 mx-auto font-[600]'>One Touch Of Nature Makes The Whole World Kin</h1>
    <p className='text-[grey]'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum. </p>
    <p className='text-[grey]'>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
    <Button text={'Learn More'}/>
   </div>
   </div>

   <div  className={width <1225?'services grid gap-10 p-20 text-white relative':'services grid grid-cols-2  gap-40 px-36 py-32 text-white relative '}>
        <h1 className={width <1225?'h-fit':'order-2 h-fit '}>A Light Wind Swept Over The Corn, And All Nature Laughed In The Sunshine.</h1>
        <div className="section align-baseline">
            <h3>Services</h3>
            <h1 className='mt-3 mb-6'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper.</h1>
            <ul>
                <li className='border-t-2 pt-6 mb-6'>
                    <h3>Study Nature, Love Nature</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </li>
                <li className='border-t-2 pt-6 mb-6'>
                    <h3>Autumn Is a Second Spring</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </li>
                <li className='border-t-2 pt-6 mb-6'>
                    <h3>Just Let It Rain</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </li>
            </ul>
        </div>
        
    </div>
    <div className={width<1225?'projects p-32 ':'projects px-36 py-32 '}>
        <h3 className='text-center text-lg font-bold'>Projects</h3>
        <h1 className='mb-10 mt-4 text-5xl text-center font-bold'>Forest Wilderness</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
            <div className="img text-center ">
                <img src={img1} alt="" className='mx-auto' />
                <h3 className='my-4 font-bold text-xl'>Look Deep Into Nature</h3>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="img text-center">
                <img src={img2} alt="" className='mx-auto lg:mt-0 mt-5' />
                <h3 className='my-4 font-bold text-xl'>Just Living Is Not Enough</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="img text-center">
            <img src={img2} alt="" className='mx-auto lg:mt-0 mt-5' />
                <h3 className='my-4 font-bold text-xl'>Adopt The Pace Of Nature</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
    </div>
    <Started/>
    <Footer/>
   </div>
  )
}

export default Home
