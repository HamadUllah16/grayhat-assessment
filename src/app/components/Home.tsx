import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import { useRouter } from 'next/navigation'


function Home() {
    const router = useRouter();
    return (
        <ScreenWrapper>
            <div className='flex flex-grow items-center justify-center gap-3'
            >
                <button onClick={() => router.push('/view-services')}>
                    View Services
                </button>
                <button onClick={() => router.push('/add-service')}>
                    Add Services
                </button>
            </div>

        </ScreenWrapper>
    )
}

export default Home