import { CarouselItem } from '@/components/ui/carousel'
import React, { useState } from 'react'
import { formatCreatedAt } from '../util/formatDateTime'
import { Building2 } from 'lucide-react'

interface jobType {
    _id: string,
    title: string,
    company: string,
    salaryRange: string,
    createdAt: string
}


function JobCard({ job, children }: { job: jobType, children: React.ReactNode | null }) {

    const [toggle, setToggle] = useState(false);
    return (
        <CarouselItem className='w-fit min-w-56'>
            <div
                className='flex flex-col rounded-2xl relative overflow-hidden hover:first-child:flex'
                onMouseEnter={() => setToggle(true)}
                onMouseLeave={() => setToggle(false)}
            >
                <div
                    className={`${toggle ? 'z-50 opacity-100' : 'z-0 opacity-0'}
                                            flex w-full h-full transition-all duration-300 ease-in-out
                                                absolute items-center justify-center top-0 left-0 bg-slate-600
                                                bg-opacity-60`}
                >
                    {children}
                </div>

                <div className='flex flex-col p-6 gap-2 bg-white'>
                    <div className='flex flex-col gap-1'>
                        <h5 className='text-gray-600 text-xs font-semibold '>{formatCreatedAt(job.createdAt)}</h5>
                        <h5 className='text-black font-bold text-xl max-w-52 capitalize'>{job.title}</h5>
                    </div>


                    <div className='py-1 px-2 flex rounded-md items-end justify-center bg-zinc-100'>
                        <p className='font-thin text-gray-600 text-xs'>Monthly salary:</p>
                        <h6 className='font-bold text-xs text-black'>{job.salaryRange}</h6>
                        <p className='font-thin text-black text-xs'>/month</p>
                    </div>

                </div>

                <div className='flex items-end gap-2 px-6 py-3 bg-black'>

                    <Building2 size={'18px'} />

                    <h6 className='font-bold text-sm capitalize'>{job.company}</h6>


                </div>


            </div>
        </CarouselItem>
    )
}

export default JobCard