'use client'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import JobCard from '../components/JobCard'
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { getAllJobs } from '../redux/features/jobSlice'
import RecommendedJobsCard from '../components/RecommendedJobsCard'
import ApplyForm from '../components/ApplyForm'

function ViewServicesPage() {
    const { email } = useSelector((state: RootState) => state.user);
    const [showApply, setShowApply] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { allJobPosts } = useSelector((state: RootState) => state.job)
    const excludeMyJobs = allJobPosts.filter((job) => job.poster !== email)

    useEffect(() => {
        if (allJobPosts.length === 0) {
            dispatch(getAllJobs())
        }
    }, [])
    return (
        <ScreenWrapper>

            <Header />

            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-2xl px-6'>Upcoming Jobs</h3>


                <Carousel className='w-full overflow-hidden pl-6'>
                    <CarouselContent className='w-full -ml-3'>
                        {excludeMyJobs.length > 0 ?
                            excludeMyJobs.map((job, index) => {
                                return (
                                    <JobCard
                                        key={job._id}
                                        job={job}
                                    >

                                        {/* this implementation is made dynamic for reusability purpose, card remains the same, action differs. */}
                                        {/* form to apply for the job */}
                                        <ApplyForm job={job} />

                                    </JobCard>
                                )
                            })
                            :
                            <p className='px-6 text-xs'>
                                No job posts found...
                            </p>
                        }
                    </CarouselContent>
                </Carousel>

            </div>

            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-2xl px-6'>Browse more</h3>

                <Carousel className='w-full overflow-hidden pl-6'>
                    <CarouselContent className='w-full -ml-3'>
                        {allJobPosts.length > 0 ?
                            allJobPosts.map((job, index) => {
                                if (job.appliedCandidates.length > 3) {
                                    return (
                                        <RecommendedJobsCard
                                            key={job._id}
                                            job={job}
                                        />
                                    )
                                }
                            }
                            )
                            :
                            <p className='px-6 text-xs'>
                                No recommended job posts found...
                            </p>
                        }
                    </CarouselContent>
                </Carousel>
            </div>

        </ScreenWrapper>
    )
}

export default ViewServicesPage