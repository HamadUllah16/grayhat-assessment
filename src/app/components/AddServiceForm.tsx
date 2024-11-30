import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { FormikValues } from 'formik'
import { Plus } from 'lucide-react'
import React from 'react'

function AddServiceForm({ formik }: { formik: FormikValues }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={'icon'}>
                    <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Job Post</DialogTitle>
                    <DialogDescription>Post a job to find talent for your role.</DialogDescription>
                </DialogHeader>
                <form onSubmit={formik.handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                placeholder="Junior Graphic Designer"
                                className="col-span-3"
                            />

                            <Label htmlFor="company" className="text-right">Company</Label>
                            <Input
                                id="company"
                                name="company"
                                onChange={formik.handleChange}
                                value={formik.values.company}
                                placeholder="Grayhat"
                                className="col-span-3"
                            />

                            <Label htmlFor="salaryRange" className="text-right">Salary</Label>
                            <Input
                                id="salaryRange"
                                name="salaryRange"
                                onChange={formik.handleChange}
                                value={formik.values.salaryRange}
                                placeholder="$3k - $5k"
                                className="col-span-3"
                            />

                        </div>

                        <div className="grid grid-cols-4 gap-4 items-start">
                            <Label className="text-right col-span-1">Job Type</Label>
                            <RadioGroup
                                name="jobType"
                                value={formik.values.jobType}
                                onValueChange={(value) => formik.setFieldValue('jobType', value)}
                                className="col-span-3"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Onsite" id="r1" />
                                    <Label htmlFor="r1">Onsite</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Remote" id="r2" />
                                    <Label htmlFor="r2">Remote</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className='flex flex-col gap-1'>
                            {formik.errors.title && <p className="text-red-400 col-span-4 text-xs">{formik.errors.title}</p>}
                            {formik.errors.company && <p className="text-red-400 col-span-4 text-xs">{formik.errors.company}</p>}
                            {formik.errors.jobType && <p className="text-red-400 col-span-4 text-xs">{formik.errors.jobType}</p>}
                            {formik.errors.salaryRange && <p className="text-red-400 col-span-4 text-xs">{formik.errors.salaryRange}</p>}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            disabled={!(formik.dirty && formik.isValid)}
                            title={!formik.dirty ? "Make changes to enable" : "Fix validation errors"}
                        >Create</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddServiceForm