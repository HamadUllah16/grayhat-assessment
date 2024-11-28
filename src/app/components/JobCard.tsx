import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'

function JobCard() {
    return (
        <CarouselItem className='w-fit min-w-56'>

            <div className='flex flex-col rounded-2xl overflow-hidden'>

                <div className='flex flex-col p-6 gap-2 bg-white'>
                    <div className='flex flex-col gap-1'>
                        <h5 className='text-gray-600 text-xs font-semibold '>4pm today</h5>
                        <h5 className='text-black font-bold text-2xl'>Wash the Car</h5>
                    </div>


                    <div className='py-1 px-2 flex rounded-md items-end justify-center bg-zinc-100'>
                        <p className='font-thin text-gray-600 text-xs'>Monthly salary:</p>
                        <h6 className='font-bold text-xs text-black'>$3k-6k</h6>
                        <p className='font-thin text-black text-xs'>/month</p>
                    </div>

                </div>

                <div className='flex items-end gap-1 px-6 py-3 bg-black'>

                    <div className='rounded-full h-6 w-6 bg-gray-600'>

                    </div>

                    <h6 className='font-bold text-sm'>Dino Studio</h6>


                </div>


            </div>
        </CarouselItem>
    )
}

export default JobCard