import { CarouselItem } from '@/components/ui/carousel'
import { Building2, MapPin } from 'lucide-react'
import React, { useState } from 'react'

interface jobPost {
    _id: string,
    title: string,
    company: string,
    jobType: string,
    salaryRange: string,
    createdAt: string,
    appliedCandidates: { email: string, name: string }[]
}


function RecommendedJobsCard({ job, children }: { job: jobPost, children: React.ReactNode }) {
    const [toggle, setToggle] = useState(false);
    const bgcolors = ['bg-red-400', 'bg-blue-200', 'bg-purple-600']
    return (
        <CarouselItem className='min-w-72 max-w-80'>

            <div
                className='flex flex-col rounded-2xl overflow-hidden relative'
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

                <div className='flex flex-col p-6 gap-4 bg-white'>

                    <div className='flex flex-col gap-1'>

                        <h5 className='text-black font-bold text-xl max-w-52 capitalize'>
                            {job.title}
                        </h5>


                        <div className='flex gap-2 items-center'>
                            <Building2 size={'18px'} color='black' />

                            <h5 className='text-gray-400 text-xs capitalize'>{job.company}</h5>
                        </div>
                    </div>

                    <div className='flex h-8 items-end'>
                        {/* applied candidates list */}
                        <div className="flex relative w-20 h-8">
                            {job.appliedCandidates.slice(0, 3).map((worker, index) => (
                                <div
                                    key={index}
                                    className={`absolute flex justify-center items-center bottom-0 left-[${index * 20}px] ${bgcolors[index]} h-7 w-7 rounded-full border overflow-hidden`}
                                    style={{ left: `${index * 20}px` }}
                                >
                                    <p className="text-sm font-bold text-white">{worker.name.charAt(0)}</p>
                                </div>
                            ))}
                        </div>


                        <h6 className='font-bold text-sm text-black'>+{job.appliedCandidates.length - 3} applied</h6>
                    </div>

                </div>


                <div style={{
                    background: 'linear-gradient(90deg, rgba(141, 87, 177, 1) 0%, rgba(176, 182, 186, 1) 20%, rgba(102, 203, 202, 1) 40%, rgba(136, 206, 79, 1) 60%, rgba(227, 194, 50, 1) 80%, rgba(222, 130, 0, 1) 100%)'

                }} className='flex justify-between items-end gap-2 px-6 py-3'>
                    <div className='flex gap-1 items-end'>
                        <MapPin color='black' />

                        <h6 className='font-bold text-sm text-black capitalize'>{job.jobType}</h6>

                    </div>

                    <div className='py-1 px-2 flex rounded-sm items-end justify-center bg-white'>
                        <h6 className='font-bold text-xs text-black capitalize'>{job.salaryRange}</h6>
                        <p style={{ fontSize: '8px' }} className='font-thin text-gray-600'>/month</p>
                    </div>
                </div>

            </div>
        </CarouselItem>
    )
}

export default RecommendedJobsCard