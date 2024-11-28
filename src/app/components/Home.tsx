import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    return (
        <ScreenWrapper>
            <div className='flex flex-grow items-center justify-center gap-3'
            >
                <button onClick={() => navigate('/view-services')}>
                    View Services
                </button>
                <button onClick={() => navigate('/add-service')}>
                    Add Services
                </button>
            </div>

        </ScreenWrapper>
    )
}

export default Home