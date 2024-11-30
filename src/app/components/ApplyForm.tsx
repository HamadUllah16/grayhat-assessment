'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { applyToJob } from '../redux/features/jobSlice'
import toast from 'react-hot-toast'

interface jobType {
    _id: string,
    title: string,
    company: string,
    salaryRange: string,
    createdAt: string
}

function ApplyForm({ job }: { job: jobType }) {
    const { name, email } = useSelector((state: RootState) => state.user)
    const [profile, setProfile] = useState({ name: name ?? '', email: email ?? '' });
    const [applied, setApplied] = useState(false);


    const { allJobPosts } = useSelector((state: RootState) => state.job)
    const relevantJob = allJobPosts.find((eachJob) => eachJob._id === job._id)

    function checkApplied() {
        if (relevantJob?.appliedCandidates.find((worker) => worker.email === email)) {
            setApplied(true)
        }
        else {
            setApplied(false)
        }
    }
    const dispatch = useDispatch<AppDispatch>();


    function handleApply(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        toast.promise(
            dispatch(applyToJob({ name, email, jobId: job._id }))
                .unwrap(), {
            loading: 'Loading...',
            success: () => {
                setApplied(true);
                return 'Applied'
            },
            error: 'Could not apply to the job.',
        }
        )
    }

    useEffect(() => {
        checkApplied()
    }, [applied])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={applied} size={'default'} variant={'secondary'}>
                    {applied ? "Applied" : "Apply"}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Apply</DialogTitle>
                    <DialogDescription>Apply to {job.title} at {job.company}</DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={handleApply}
                >
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                defaultValue={profile.name}
                                onChange={e => setProfile({ ...profile, name: e.target.value })}
                                placeholder="Hamad Ullah"
                                className="col-span-3"
                            />


                            <Label htmlFor="email" className="text-right">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                defaultValue={profile.email}
                                onChange={e => setProfile({ ...profile, email: e.target.value })}
                                placeholder="hamad@gmail.com"
                                className="col-span-3"
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            {/* {formik.errors.title && <p className="text-red-400 col-span-4 text-xs">{formik.errors.title}</p>} */}
                            {/* {formik.errors.company && <p className="text-red-400 col-span-4 text-xs">{formik.errors.company}</p>} */}
                            {/* {formik.errors.jobType && <p className="text-red-400 col-span-4 text-xs">{formik.errors.jobType}</p>} */}
                            {/* {formik.errors.salaryRange && <p className="text-red-400 col-span-4 text-xs">{formik.errors.salaryRange}</p>} */}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                type="submit"
                                disabled={profile.email === '' && profile.name === ''}
                            >
                                Apply
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ApplyForm