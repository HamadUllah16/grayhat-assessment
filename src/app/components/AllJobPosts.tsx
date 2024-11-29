'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { getAllJobs } from '../redux/features/jobSlice';
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import JobCard from './JobCard';
import ApplyForm from './ApplyForm';
import ViewJobDetails from './ViewJobDetails';

function AllJobPosts() {
    const { email } = useSelector((state: RootState) => state.user);
    const { allJobPosts } = useSelector((state: RootState) => state.job);
    const myJobs = allJobPosts.filter(job => job.poster === email)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (allJobPosts.length === 0) {
            dispatch(getAllJobs())
        }
    }, [])

    return (
        <Carousel className='w-full overflow-hidden pl-6'>
            <CarouselContent className='w-full -ml-3'>
                {myJobs.length > 0 ?
                    myJobs.map((job) => {
                        return (
                            <JobCard
                                job={job}
                                key={job._id}
                            >
                                {/* actions of Job Card are made dynamic with children for reusability */}
                                {/* form to apply for the job */}
                                <ViewJobDetails
                                    job={job}
                                />

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
    )
}

export default AllJobPosts