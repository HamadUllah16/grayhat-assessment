import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import JobCard from '../components/JobCard'
import GigsCard from '../components/GigsCard'
import { Carousel, CarouselContent } from '@/components/ui/carousel'

function ViewServicesPage() {
    return (
        <ScreenWrapper>

            <Header />

            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-2xl px-6'>Upcoming Jobs</h3>


                <Carousel className='w-full overflow-hidden pl-6'>
                    <CarouselContent className='w-full -ml-3'>
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                    </CarouselContent>
                </Carousel>

            </div>

            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-2xl px-6'>Browse more</h3>

                <Carousel className='w-full overflow-hidden pl-6'>
                    <CarouselContent className='w-full -ml-3'>
                        <GigsCard />
                        <GigsCard />
                        <GigsCard />
                        <GigsCard />
                    </CarouselContent>
                </Carousel>
            </div>

        </ScreenWrapper>
    )
}

export default ViewServicesPage