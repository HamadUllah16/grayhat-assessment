import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import AddService from '../components/AddService'
import OldHiresCard from '../components/OldHiresCard'

function AddServicePage() {
    return (
        <ScreenWrapper>

            <Header />

            <AddService />

            <OldHiresCard />

        </ScreenWrapper>
    )
}

export default AddServicePage