import React from 'react'
import Image from 'next/image'
import Male from '../../../../public/img/man.png'





const Sectionfive = () => {
const details =[
    {
        id:1,
        pic:Male,
        label:"ARCH. MICHAEL OYEDEPO",
        position:"Architect",
    },
    {
        id:2,
        pic:Male,
        label:"ARCH. MICHAEL OYEDEPO",
        position:"Architect",
    },
    {
        id:3,
        pic:Male,
        label:"ARCH. MICHAEL OYEDEPO",
        position:"Architect",
    }
]



  return (
    <div className='pt-16 md:pt-28 xl:pt-32'>
          <div className='flex justify-center items-center gap-2'>
                <div className='border border-orange border-b-4 md:border-b-8 w-[10%] md:w-[6%] rounded-3xl'> </div>
                <div className='border border-fad border-b-4 md:border-b-8 w-[6%] md:w-[3%] rounded-3xl'> </div>
                <div>
                    <p className='text-center text-xl md:text-4xl lg:text-2xl xl:text-3xl'>MEET OUR AGENTS</p>

                </div>
            </div>
            <div className='flex items-center justify-center pt-2 pb-5 md:pt-4 md:pb-14 lg:pt-5 lg:pb-10'>
                <p className='text-center w-[85%] md:w-[90%] lg:w-[70%] xl:w-[50%] text-xs md:text-2xl lg:text-lg xl:text-xl font-light'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 md:gap-16  px-10 py-8 md:py-10 lg:py-3 xl:py-10 lg:px-20 xl:px-30'>
                {
                    details.map((datum)=> (
                        <div className='flex flex-col items-center gap-1 md:gap-2 '>
                           <Image src={datum.pic} alt='pic-img' className='w-[50%] lg:w-[70%]' />
                            <p className='text-sm md:text-2xl lg:text-sm xl:text-base font-medium'>{datum.label}</p>
                            <p className=' text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light text-orange'>{datum.position}</p>
                            </div>
                    ))
                }
            </div>
    </div>
  )
}

export default Sectionfive