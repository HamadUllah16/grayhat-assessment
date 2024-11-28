import { CarouselItem } from '@/components/ui/carousel'
import { MapPin, Phone } from 'lucide-react'
import React from 'react'

function GigsCard() {
    return (
        <CarouselItem className='min-w-72 max-w-80 '>

            <div className='flex flex-col rounded-2xl overflow-hidden'>

                <div className='flex flex-col p-6 gap-4 bg-white'>
                    <div className='flex flex-col gap-1'>

                        <h5 className='text-black font-bold text-xl max-w-52'>
                            Junior Graphics and Product Designer
                        </h5>

                        <div className='flex gap-1 items-center'>
                            <Phone className='text-purple-600' size={'14px'} />
                            <h5 className='text-gray-400 text-xs '>4pm Objectus Technologies, LLC</h5>
                        </div>
                    </div>

                    <div className='flex h-8 items-end'>
                        {/* applied candidates list */}
                        <div className='flex relative w-20 h-8'>
                            <div className='absolute bottom-0 left-0 h-7 w-7 bg-blue-200 rounded-full border border-black overflow-hidden'>

                            </div>

                            <div className='absolute bottom-0 left-5 bg-red-400 h-7 w-7 rounded-full border border-black overflow-hidden'>

                            </div>

                            <div className='absolute bottom-0 left-10 h-7 w-7 rounded-full border bg-purple-600 border-black overflow-hidden'>
                            </div>

                        </div>

                        <h6 className='font-bold text-sm text-black'>+3 applied</h6>
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
        </CarouselItem>
    )
}

export default GigsCard