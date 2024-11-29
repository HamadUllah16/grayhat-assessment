'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function LoginForm() {
    const [profile, setProfile] = useState({ name: '', email: '', role: '' })
    const path = usePathname();

    function handleSubmit() {
        localStorage.setItem('name', profile.name);
        localStorage.setItem('email', profile.email);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={'default'} variant={'secondary'}>
                    Sign in
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input
                                id="name"
                                onChange={e => setProfile({ ...profile, name: e.target.value })}
                                value={profile.name}
                                placeholder="Hamad Ullah"
                                className="col-span-3"
                            />


                            <Label htmlFor="email" className="text-right">Email</Label>
                            <Input
                                id="email"
                                onChange={e => setProfile({ ...profile, email: e.target.value })}
                                value={profile.email}
                                placeholder="hamad@email.com"
                                className="col-span-3"
                            />


                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={profile.name === '' && profile.email === ''}>Sign In</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default LoginForm