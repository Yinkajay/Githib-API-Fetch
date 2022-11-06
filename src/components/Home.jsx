import React from 'react'
import { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import styles from './Home.module.css'
import { } from 'react-icons/fa'

const Home = () => {
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showButton, setShowButton] = useState(true)


    const getProfile = async function () {
        setShowButton(false)
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
                setDetails(profileDeets)
                setIsLoading(false)
            })

        // console.log(details);
    }

    return (
        <main>
            <section>
                <h1>Hello.</h1>
                <p>Github API Fetch implementation for AltSchool Second Semester Examination.</p>
                <p>This website implements an API fetch of my github portfolio using JS fetch API. You can get my general profile details by clicking on the button below.</p>
                <p>The repos page shows a dynamic list of all my Github Repositories. They can be clicked to get more info aboout each repo.</p>
            </section>
            <hr/>
                {showButton && <h5>Click the button below to get my profile data</h5>}
            <section>
                {showButton &&
                    <button className={styles.btn} onClick={getProfile} style={{ margin: "10px  0 10px ", textTransform: "uppercase" }}>
                        Get my profile data
                    </button>}
                {isLoading && <div className={styles['lds-ripple']}><div></div><div></div></div>}
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
            </section>
        </main>
    )
}

export default Home;
