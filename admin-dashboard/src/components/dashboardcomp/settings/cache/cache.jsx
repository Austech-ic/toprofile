import React from 'react'

const Cache = () => {
    return (
        <div className='border border-slate-300 rounded-2xl p-5 flex flex-col gap-8'>
            <div>
                <p className='text-sm'>Enable cache?</p>
                <div className=' flex items-center gap-4 pt-3'>
                    <div className=' flex items-center gap-2'>
                        <input type="radio" id="yes" name="cache" value="yes" />
                        <label htmlFor="yes" className='text-sm'>Yes</label>
                    </div>

                    <div className=' flex items-center gap-2'>
                        <input type="radio" id="no" name="cache" value="no" />
                        <label htmlFor="no" className='text-sm'>No</label>
                    </div>
                </div>
            </div>

            <div>
                <p className='text-sm'>Cache admin menu?</p>
                <div className=' flex items-center gap-4 pt-3'>
                    <div className=' flex items-center gap-2'>
                        <input type="radio" id="blue" name="admin" value="yess" />
                        <label htmlFor="yess" className='text-sm'>Yes</label>
                    </div>

                    <div className=' flex items-center gap-2'>
                        <input type="radio" id="yellow" name="admin" value="noo" />
                        <label htmlFor="noo" className='text-sm'>No</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cache