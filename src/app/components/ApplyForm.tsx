'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
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

    // const { allJobPosts } = useSelector((state: RootState) => state.job)

    const isApplied = useSelector((state: RootState) =>
        state.job.allJobPosts.find(j => j._id === job._id)?.appliedCandidates.some(c => c.email === email)
    );

    const dispatch = useDispatch<AppDispatch>();


    function handleApply(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        toast.promise(
            dispatch(applyToJob({ name, email, jobId: job._id }))
                .unwrap(), {
            loading: 'Loading...',
            success: 'Applied',
            error: 'Could not apply to the job.',
        }
        )
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={isApplied} size={'default'} variant={'secondary'}>
                    {isApplied ? "Applied" : "Apply"}
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