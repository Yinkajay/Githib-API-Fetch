import React from 'react'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import RepComponent from './RepComponent'
import styles from './Repos.module.css'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Repos = () => {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const reposPerPage = 9;


    const getProfile = () => {
        setIsLoading(true)
        try {
            // fetch('https://api.github.com/users/Yinkajay')
            fetch('https://api.github.com/users/Yinkajay/repos')
                .then((response) => response.json())
                .then(data => {
                    const formattedRepos = data.map(repo => {
                        return {
                            key: repo.id,
                            Name: repo.name,
                            Description: repo.description,
                            Link: repo['html_url'],
                            id: repo.id,
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
            <Helmet>
                <title>Repositories</title>
                <meta name='description' content='List of all repo data'></meta>
                <link rel='canonical' />
            </Helmet>
            <main>
                <section>
                    <h1>These are my GitHub Repositories.</h1>
                    <p>Click the button on any repo to get more details</p>
                    {isLoading && <div className={styles['lds-hourglass']}></div>}
                    {!isLoading && <div className={styles['repo-container']}>
                        {repos.slice((page - 1) * reposPerPage, page * reposPerPage).map(repo => (
                            <RepComponent
                                key={repo.key}
                                name={repo.Name}
                                description={repo.Description}
                                link={repo.Link}              
                            />
                        ))}
                    </div>}
                </section>
            </main>
            <section>
                {
                    !isLoading &&
                    <div className={styles['button-area']}>
                        <button className={`${styles.button} ${styles['button-prev']} `} onClick={() => setPage((p) => p - 1)} disabled={page <= 1}>
                            <FaArrowCircleLeft/>
                        </button>
                        {Array.from({ length: Math.ceil(repos.length / reposPerPage) }, (value, index) => index + 1).map(
                            (each) => (
                                <button className={styles.button} onClick={() => setPage(each)}>{each}</button>
                            )
                        )}
                        <button className={`${styles.button} ${styles['button-next']} `} onClick={() => setPage((p) => p + 1)} disabled={page >= (repos.length / reposPerPage)}>
                        <FaArrowCircleRight/>
                        </button>
                    </div>
                }
            </section>
        </>
    )
}

export default Repos
