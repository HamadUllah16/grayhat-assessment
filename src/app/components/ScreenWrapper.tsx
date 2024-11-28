import React from 'react'

function ScreenWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col w-full h-full gap-8'>
            {children}
        </div>
    )
}

export default ScreenWrapper