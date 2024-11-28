import Image from 'next/image';
import React from 'react'
const defaultPfp = '/default.jpg';
function Header() {
    return (
        <div className='flex gap-4 p-6'>
            <div
                className='rounded-full h-16 w-16 overflow-hidden relative'
            >
                <Image
                    src={defaultPfp}
                    alt='a profile picture'
                    fill
                    objectFit='cover'
                />
            </div>

            <div className='flex flex-col justify-center items-start'>
                <p className='font-light text-sm' color='gray'>Welcome back</p>
                <h4 className='font-bold text-base'>Hamad Ullah</h4>
            </div>
        </div>
    )
}

export default Header