'use client'
import React from 'react'
import AddServiceForm from './AddServiceForm';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { createJobPost } from '../redux/features/jobSlice';
import toast from 'react-hot-toast';

function AddService() {
    const { email } = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();
    const formik = useFormik({
        initialValues: {
            email: email ?? '',
            title: '',
            company: '',
            jobType: '',
            salaryRange: '',
        },
        enableReinitialize: true,
        validate(values) {
            const errors: { [key: string]: string } = {};

            if (values.title.length < 10) {
                errors.title = 'Title cannot be less than 10 characters.'
            }
            if (values.company.length < 2) {
                errors.title = 'Company is required.'
            }
            if (!values.jobType) {
                errors.title = 'Job type is required.'
            }
            if (values.salaryRange.length < 2) {
                errors.salaryRange = 'Salary is required.'
            }

            console.log(errors)

            return errors;
        },
        onSubmit(values, formikHelpers) {

            toast.promise(
                dispatch(createJobPost({ values, formikHelpers }))
                    .unwrap(), {
                loading: 'Loading...',
                success: 'Job Post Created.',
                error: 'Could not create a Job Post'
            }
            )
        },
    })
    return (
        <div className='p-6'>

            <div className='flex flex-col rounded-2xl overflow-hidden'>

                <div className='flex justify-between p-6 bg-white'>
                    <h5 className='text-black font-bold text-2xl w-full'>Post a new Job</h5>

                    <AddServiceForm
                        formik={formik}

                    />

                </div>

                <div className='flex justify-between items-end gap-2 px-6 py-3 bg-black'>
                    <div className='flex gap-1 items-end'>
                        <div className='rounded-full h-6 w-6 bg-gray-600'>

                        </div>

                        <h6 className='font-bold text-sm'>Dino Studio</h6>

                    </div>
                    <h6 className='font-bold text-sm text-gray-600'>Switch</h6>
                </div>

            </div>



        </div >
    )
}

export default AddService
