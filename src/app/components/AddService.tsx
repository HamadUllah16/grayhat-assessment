import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

function AddService() {
    return (
        <div className='p-6'>

            <div className='flex flex-col rounded-2xl overflow-hidden'>

                <div className='flex justify-between p-6 bg-white'>
                    <h5 className='text-black font-bold text-2xl'>Post a new Job</h5>
                    <Button size={'icon'}>
                        <Plus />
                    </Button>

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
        </div>
    )
}

export default AddService