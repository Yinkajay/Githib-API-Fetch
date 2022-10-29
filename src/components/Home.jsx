import React from 'react'
import { useState } from 'react'
import ProfileInfo from './ProfileInfo'

const Home = () => {
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showButton, setShowButton] = useState(true)


    const getProfile = async function () {
        setIsLoading(true)
        // const response = await fetch('https://api.github.com/users/Yinkajay')
        // const data = await response.json();
        // console.log(response);
        // console.log(data);
        fetch('https://api.github.com/users/Yinkajay')
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                const profileDetails = []
                profileDetails.push(data)
                const profileDeets = profileDetails.map(profile => {
                    return {
                        profilePic: profile['avatar_url'],
                        profileName: profile.name,
                        profileBio: profile.bio,
                        profileFollowers: profile.followers,
                        profileRepoNumber: profile['public_repos']
                    }
                })
                console.log(profileDeets);
                setDetails(profileDeets)
                setIsLoading(false)
                setShowButton(false)
            })

        // console.log(details);
    }

    return (
        <div>
            <h1>Hello.</h1>
            <p>Github API Fetch implementation for AltSchool Second Semester Examination</p>
            {showButton && <button onClick={getProfile}>Get my profile data</button>}
            {isLoading && <h2>Getting profile deets...</h2>}
            {!isLoading && details.map((profile) => (
                <ProfileInfo
                    key='1'
                    src={profile.profilePic}
                    name={profile.profileName}
                    bio={profile.profileBio}
                    followers={profile.profileFollowers}
                    repoNumber={profile.profileRepoNumber}
                />
            ))}
        </div>
    )
}

export default Home;
