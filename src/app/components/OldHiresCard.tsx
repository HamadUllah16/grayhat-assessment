import { MapPin } from 'lucide-react'
import React from 'react'

function OldHiresCard() {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden'>

      <div className='flex flex-col p-6 gap-4 bg-white'>
        <div>
          <h5 className='text-gray-600 text-sm'>4pm today</h5>
          <h5 className='text-black font-bold text-2xl'>Wash the Car</h5>
        </div>

        <div className='flex gap-2 items-end'>

          <div className='h-9 w-9 relative rounded-full border border-black bg-slate-600 overflow-hidden'>

          </div>
          <h6 className='font-bold text-md text-gray-900'>Anjelina Marcus</h6>
        </div>

      </div>

      <div style={{
        background: 'linear-gradient(90deg, rgba(141, 87, 177, 1) 0%, rgba(176, 182, 186, 1) 20%, rgba(102, 203, 202, 1) 40%, rgba(136, 206, 79, 1) 60%, rgba(227, 194, 50, 1) 80%, rgba(222, 130, 0, 1) 100%)'

      }} className='flex justify-between items-end gap-2 px-6 py-3'>
        <div className='flex gap-1 items-end'>
          <MapPin color='black' />

          <h6 className='font-bold text-sm text-black'>Remote</h6>

        </div>

        <div className='py-1 px-2 flex rounded-sm items-end justify-center bg-white'>
          <h6 className='font-bold text-xs text-black'>$3k-6k</h6>
          <p style={{ fontSize: '8px' }} className='font-thin text-gray-600'>/month</p>
        </div>
      </div>

    </div>
  )
}

export default OldHiresCard