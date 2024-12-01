'use client'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import AddService from '../components/AddService'
import OldHiresCard from '../components/OldHiresCard'
import AllJobPosts from '../components/AllJobPosts'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


function AddServicePage() {
    const { email } = useSelector((state: RootState) => state.user);
    return (
        <ScreenWrapper>

            <Header />

            {email ?
                <>
                    <AddService />

                    {/* rendering old hires */}
                    <div className='flex flex-col gap-4 px-6'>
                        <h3 className='font-bold text-2xl'>People you&apos;ve hired</h3>
                        <OldHiresCard />
                    </div>

                    {/* rendering all job posts */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold text-2xl px-6'>My job posts</h3>
                        <AllJobPosts />
                    </div>
                </>
                :
                <p className='text-xs text-center'>
                    Sign in to post jobs...
                </p>
            }



        </ScreenWrapper>
    )

}

export default AddServicePage