"use client"
import { TbUsers } from "react-icons/tb";
import { PiUsersThreeThin } from "react-icons/pi";
import red from '../../../../public/img/red.jpeg'
import green from '../../../../public/img/green.jpeg'
import blue from '../../../../public/img/blue.jpeg'
import house from '../../../../public/img/house.jpeg'
import Image from 'next/image';



const Dashboard = () => {
    const details = [
        {
            id: 1,
            pic:red,
            icon: <TbUsers className='h-6 w-6 xl:w-6 xl:h-6 text-lite' />,
            text: "2056",
            textwo: "Visitor",
        },
        {
            id: 2,
            pic:blue,
            icon: <PiUsersThreeThin className='h-6 w-6 xl:w-6 xl:h-6 text-lite' />,
            text: "20",
            textwo: "Blog Post",
        },
        {
            id: 3,
            pic:green,
            icon: <PiUsersThreeThin className='h-6 w-6 xl:w-6 xl:h-6 text-lite'/>,
            text: "5",
            textwo: "Agents",
        },
        {
            id: 4,
            pic:house,
            icon: <PiUsersThreeThin className='h-6 w-6 xl:w-6 xl:h-6 text-lite' />,
            text: "30",
            textwo: "Properties",
        }
    ]
    return (
        <div>
            <div className='grid grid-cols-4  gap-6'>
               {
                details.map((datum) => (
                    <div key={datum.id} className='bg-white rounded-2xl p-5 flex flex-col justify-center items-center gap-4'>
                           
                              <Image src={datum.pic} alt='pic-img' className=' w-[25%] xl:w-[20%]' />
                        
                            <div className='flex flex-col justify-center items-center'>
                            <p className='text-lite text-2xl font-semibold'>{datum.text}</p>
                            <p className='text-sm  font-light'>{datum.textwo}</p>
                            </div>
                            </div>
                ))
               }
            </div>
            
        </div>
    )
}

export default Dashboard