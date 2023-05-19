import React from 'react'
import MainNavigation from '../components/MainNavigation'

const PageNotFound = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occured </h1>
                <p>Could not find page</p>
            </main>
        </>
    )
}

export default PageNotFound