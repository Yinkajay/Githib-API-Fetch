import React from 'react'
import { useState, useEffect } from 'react'
import AllRepositories from './AllRepositories'
import styles from './Repos.module.css'


const Repos = () => {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getProfile = () => {
        setIsLoading(true)
        try {
            // fetch('https://api.github.com/users/Yinkajay')
            fetch('https://api.github.com/users/Yinkajay/repos')
                .then((response) => response.json())
                .then(data => {
                    const formattedRepos = data.map(repo => {
                        return {
                            Name: repo.name,
                            Description: repo.description,
                            Link: repo['html_url'],
                            id: repo.id
                        }
                    })
                    console.log(formattedRepos);
                    console.log('i fire once')
                    setRepos(formattedRepos)
                    setIsLoading(false)
                })
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        getProfile()
    }, [])


    return (
        <>
            <div>
                <h2>These are my GitHub Repositories.</h2>
                {isLoading && <h3>Loading....</h3>}
                {!isLoading && <div className={styles['repo-container']}>
                    <AllRepositories list={repos} />
                </div>}
            </div>
            {!isLoading &&
                <div className={styles['button-area']}>
                    <button>Prev</button>
                    <button>Next</button>
                </div>
            }
        </>
    )
}

export default Repos
