import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import AddService from '../components/AddService'
import OldHiresCard from '../components/OldHiresCard'
import LoginForm from '../components/LoginForm'
import AllJobPosts from '../components/AllJobPosts'


function AddServicePage() {
    return (
        <ScreenWrapper>

            <Header />

            <AddService />

            {/* rendering old hires */}
            <div className='flex flex-col gap-4 px-6'>
                <h3 className='font-bold text-2xl'>People you&apos;ve hired</h3>
                <OldHiresCard />
            </div>

            {/* rendering all job posts */}
            <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-2xl px-6'>All job posts</h3>
                <AllJobPosts />
            </div>



        </ScreenWrapper>
    )

}

export default AddServicePage