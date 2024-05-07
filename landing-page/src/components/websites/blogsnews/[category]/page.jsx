
import React from 'react'
import Image from 'next/image'
import styles from './cat.module.css'
import { useParams } from 'next/navigation';
import Header from '../../header/header';
import Compeight from '../../compeight/compeight';
import multi from '../../../../../public/img/six.png'
import { BsClock } from "react-icons/bs";
import Link from 'next/link'



const Page = ({ id }) => {
  const { singlepropertyid } = useParams();

  // if (!details) {
  //   return <div>Loading...</div>; // Add a loading state while fetching data
  // }

  const details = [
    {
      id: 1,
      pic: multi,
      duration: "4 mins read",
      text: "Real Estate, The Next Level Power House",
      textwo: "Read More...",

    },
    {
      id: 2,
      pic: multi,
      duration: "4 mins read",
      text: "Real Estate, The Next Level Power House",
      textwo: "Read More...",
    },
    {
      id: 3,
      pic: multi,
      duration: "4 mins read",
      text: "Real Estate, The Next Level Power House",
      textwo: "Read More...",
    },
    {
      id: 4,
      pic: multi,
      duration: "4 mins read",
      text: "Real Estate, The Next Level Power House",
      textwo: "Read More...",
    },
   
  ]


  return (
    <div >
      <div className={styles.main}>
        <Header />
        <Compeight />
      </div>

      <div className='px-10 py-10 lg:py-16  md:px-16 lg:px-20 xl:px-30 flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-20'>
        <div className='flex-1 flex flex-col gap-4 md:gap-6'>
          <div>
            <Image src={multi} alt='pic-img' className='' />
          </div>
          <div className=' px-0 md:px-2 lg:px-0'>
            <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-medium '>Real estate, the next level power house</p>

          </div>



          <div className='px-0 md:px-2 lg:px-0 flex flex-col gap-1 md:gap-2 '>
            <p className='text-xs md:text-xl lg:text-sm xl:text-base leading-5 font-light'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

              Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </p>

          </div>


        </div>

        <div className='flex-1'>
          <p className='text-sm md:text-2xl lg:text-lg xl:text-xl font-medium '>Recent Post</p>
          <div className=' grid  gap-4 md:gap-6 lg:gap-4 py-3 md:py-5'>
            {
              details.map((datum) => (
                <div key={datum.id} className='shadow-2xl flex bg-white '>
                 <div className='flex-1'>
                 <Image src={datum.pic} alt='pic-img' className=' rounded-l-2xl h-[100%]' />
                 </div>
                  <div className='flex-1 flex flex-col gap-2 py-5'>
                  <div className='px-3 lg:px-5'>
                    <div className=' flex items-center justify-start gap-1 md:gap-2 lg:gap-2 '>
                      <BsClock className='text-brw h-3 w-3 md:h-5 md:w-5 lg:h-4 lg:w-4' />
                      <p className='text-xs md:text-lg lg:text-sm  text-brw'>{datum.duration}</p>
                    </div>
                  </div>
                  <div className=' px-3 lg:px-5 '>
                    <p className=' text-xs md:text-xl lg:text-sm text-slate-600 '>{datum.text}</p>
                  </div>
                  <div className='px-3 lg:px-5' >
                    <p className=' text-xs md:text-lg lg:text-sm  text-lite '>Read More...</p>
                  </div>
                  </div>


                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page

