
import React, {useEffect,useRef} from 'react'
import deshadding from '../../Assets/deShedding-logo.svg'
import { gsap } from "gsap";

const HeroSection = () => {
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      const spans = Array.from(textRef.current.querySelectorAll("span"));

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); 

      
      spans.forEach((span, index) => {
        timeline.to(
          span,
          {
            scale: 1.5,
            fontSize: "33px",
            fontWeight: "600",
            color: "#ffffff", 
            textShadow: "6px 6px 12px #6B716D", 
            opacity: 1, 
            duration: 1.2, 
            ease: "power2.inOut",
          },
          index * 1 
        )
        .to(
          span,
          {
            scale: 1,
            fontSize: "23px", 
            fontWeight: "normal",
            color: "#ffffff",
            opacity: 0.8, 
            duration: 0.8, 
            ease: "power2.inOut",
          }
        );
      });
    }
  }, []);

  return (
    <>
    <div className=' bg-[#16C0F3] min-h-[290px] md: h-[290px]'>
           <div className='flex flex-col justify-center items-center  gap-[20px] py-6'>
            <img src={deshadding} alt="deshadding tools" className='' />
            <h2 className='text-[23px] text-white ' ref={textRef}>
              <span> The</span> <span>safer,centler</span> <span>more</span> <span>effective tool</span>
            
            </h2>

            <p className='text-white'>
            Designed to dramatically reduce shedding for dogs and cats
            </p>
           </div>
    </div>
    </>
  )
}

export default HeroSection
