import React, {useState, useEffect ,useRef, useMemo} from 'react'
import Footer from '../components/Footer'
import '../styles/pages/_about.scss'
import Started from '../components/Started';
import Background from '../components/Background'
import img from '../externals/imgs/bg-03-free-img.jpg'
import MobileNav from '../components/MobileNav';
function About({f,v}) {
    const ref = useRef();
    const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [num1,setnum1] = useState(0);
    const [num2,setnum2] = useState(0);
    const [num3,setnum3] = useState(0);
    window.addEventListener('resize', function(event){
        setWidth(window.innerWidth)
    });
    function useIsInViewport(ref) {
        const observer = useMemo(
          () =>
            new IntersectionObserver(([entry]) => {
              if (entry.isIntersecting && !hasEnteredViewport) {
                setHasEnteredViewport(true);
               show();
              }
            }),
          [hasEnteredViewport]
        );
    
        useEffect(() => {
          observer.observe(ref.current);
    
          return () => {
            observer.disconnect();
          };
        }, [ref, observer]);
      }
    // Function to start the counting animation
    function show()
    {
                setInterval(()=>{
                    if(num1<150)
                        setnum1((prevNum1) => prevNum1 < 150 ? prevNum1 + 1 : prevNum1);
                },5)
                setInterval(()=>{
                    if(num2<15)
                        setnum2((prevNum2) => prevNum2 < 15 ? prevNum2 + 1 : prevNum2);
                },40)
                setInterval(()=>{
                    if(num3<250)
                        setnum3((prevNum3) => prevNum3 < 250 ? prevNum3 + 1 : prevNum3);
                },5)
    };
      useIsInViewport(ref);
  return (
    <div className="about-p">
        <MobileNav v={v}/>
        <Background text={'About'} img={img} f={f}/>
        <div className={width<1000?'p-32 grid':"section lg:px-36 py-32 grid md:grid-cols-2 md:gap-5"}>
            <div className='mb-5'>
                <h3 className='font-bold text-lg'>Nature Lovers</h3>
                <h2 className='font-bold text-4xl mt-2'>One Touch Of Nature Makes The Whole World Kin</h2>
            </div>
            <div>
                <h2 className='text-2xl font-bold mb-8 leading-relaxed'>Since 1995 click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p className='mb-8 text-[#504c4c] text-[15px] leading-loose'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                <p className='text-[#504c4c] text-[15px] leading-loose'>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
            </div>
        </div>

        {/*price*/}
        <div ref={ref} className={width<1100?'grid px-28 py-10 mx-auto text-center':'px-32 py-10 grid grid-cols-3 gap-8'}>
            <div className='mb-12'>
            <h3 className='font-bold text-lg'>Some Cool Facts</h3>
                <h2 className='font-bold text-4xl mt-2'>Numbers Speak For Themselves</h2>
            </div>

           { <div className={width<1100?'':'col-span-2'} id ='price'>
            <ul className=' text-center flex justify-around items-center'>
                <li>
                    <span className='font-semibold text-7xl'>{num1}</span>
                    <p className='text-[#504c4c] text-xl mt-2'>Satisfied Clients</p>
                </li>
                <li>
                <span className='font-semibold text-7xl'>{num2}</span>
                <p className='text-[#504c4c] text-xl mt-2'>Years of Experience</p>
                </li>
                <li>
                <span className='font-semibold text-7xl'>
                   {num3}
              </span>
                <p className='text-[#504c4c] text-xl mt-2'>Completed Projects</p>
                </li>
            </ul>
  </div>}
        </div>
        <div className={width<1100?"info mx-24 py-20":"info xl:mx-32 mx-28 xl:py-32 py-20"}>
            <h1 className='font-bold text-3xl '>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h1>
            <div className={width<1100?'grid grid-cols-2 mt-6 gap-6':'grid grid-cols-3 gap-8 mt-12'}>
            <div>
                <h2 className='text-[22px] font-bold mb-2'>We Love Nature</h2>
                <p className='text-[grey]'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
            </div>
            <div>
            <h2 className='text-[22px] font-bold mb-2'>It Is a Gift</h2>
                <p className='text-[grey]'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
            </div>
            <h2 className='text-3xl font-bold lg:col-span-1 col-span-2'>Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit.</h2>
            </div>
        </div>
        <Started/>
        <Footer/>
    </div>
  )
}

export default About
