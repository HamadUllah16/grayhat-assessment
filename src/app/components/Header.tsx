'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { clearUser, setUser } from '../redux/features/userSlice';
import LoginForm from './LoginForm';
import { Button } from '@/components/ui/button';

const defaultPfp = '/default.jpg';
function Header() {
    const { name, email } = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();

    function logoutHandler() {
        localStorage.removeItem('email');
        localStorage.removeItem('name');

        dispatch(clearUser())
    }
    useEffect(() => {
        const email = localStorage.getItem('email');
        const name = localStorage.getItem('name')
        dispatch(setUser({ email, name }))
    }, [name, email])


    return (
        <div className='flex gap-4 p-6'>
            {name && email ?
                <div className='flex w-full'>
                    <div className='flex w-full gap-2'>

                        <div
                            className='flex justify-center items-center bg-red-400 rounded-full h-14 w-14 overflow-hidden relative'
                        >
                            <p className='text-2xl'>
                                {name && name.charAt(0)}
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-start'>
                            <p className='font-light text-sm' color='gray'>Welcome back</p>
                            <h4 className='font-bold text-base capitalize'>{name}</h4>
                        </div>
                    </div>

                    <Button onClick={logoutHandler}>
                        Logout
                    </Button>

                </div>
                :
                <LoginForm />
            }
        </div>
    )
}

export default Header