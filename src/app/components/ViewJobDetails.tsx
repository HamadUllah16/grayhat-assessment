import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import React from 'react'

interface jobPost {
    _id: string,
    title: string,
    company: string,
    jobType: string,
    salaryRange: string,
    createdAt: string,
    appliedCandidates: { email: string, name: string }[]
}

function ViewJobDetails({ job }: { job: jobPost }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    View Details
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Job Details</DialogTitle>
                    {/* <DialogDescription>Post a job to find talent for your role.</DialogDescription> */}
                </DialogHeader>
                <div className='flex flex-col gap-2'>

                    <h3 className='font-bold text-md text-slate-200'>Applied Service Workers</h3>

                    <div className='flex flex-wrap gap-2'>

                        {job.appliedCandidates.length > 0 ?
                            job.appliedCandidates.map((worker) => {
                                return (
                                    <div key={worker.email} className='flex flex-col gap-1 bg-white rounded-lg p-2'>
                                        <p className='text-black'>
                                            {worker.name}
                                        </p>
                                        <p className='text-black'>
                                            {worker.email}
                                        </p>

                                    </div>
                                )
                            })
                            :
                            <p className='px-6 text-xs'>
                                No job posts found...
                            </p>
                        }

                    </div>
                </div>

                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ViewJobDetails