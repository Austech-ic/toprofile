import React from 'react'
import AdminLayout from '../../../components/layouts/AdminLayouts/Adminlayouts'
import Dashboard from '@/components/dashboardcomp/dashboard/dashboard'



const Page = () => {
  return (
   <AdminLayout >
  <p className='text-xl xl:text-2xl'>Account</p>
  <div className=' py-4'>
 <Dashboard />
  </div>
   </AdminLayout>
  )
}

export default Page