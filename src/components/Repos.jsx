import React from 'react'
import { useState, useEffect } from 'react'
import AllRepositories from './AllRepositories'
import styles from './Repos.module.css'


const Repos = () => {
    const [repos, setRepos] = useState([])
    const [loading, setIsLoading] = useState(false)

    const getProfile = () => {
        try {
            // fetch('https://api.github.com/users/Yinkajay')
            fetch('https://api.github.com/users/Yinkajay/repos')
                .then((response) => response.json() )
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
                <div className={styles['repo-container']}>
                    <AllRepositories list={repos} />
                </div>
            </div>
            <div>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </>
    )
}

export default Repos
