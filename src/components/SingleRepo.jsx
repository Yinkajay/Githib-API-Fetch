import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import HighlightedRepo from './HighlightedRepo';
import styles from './SingleRepo.module.css'

let repoArray = [];
// let repo = true

const SingleRepo = (props) => {
    // const [loading, setIsLoading] = useState(true)
    const location = useLocation()
    const params = useParams()

    console.log(location)
    let data = location.state
    console.log(data);
    const name = data.name
    console.log(name);
    const description = data.description
    console.log(description);
    const url = data.url
    console.log(url);    
    return (
        <main>
            <h1>Repo Details</h1>
            <div className={styles['srepo-card']}>
                <h2>
                    <p>Repo Name - {name}</p>
                    <p>Repo Description - {description}</p>
                    <p>Link to Repo - <a href={url}>{url}</a></p>
                </h2>
            </div>
        </main>
    )




}

export default SingleRepo

















            // const getRepos = async function () {
            //     fetch('https://api.github.com/users/Yinkajay/repos')
            //         .then((response) => response.json())
            //         .then(data => {
            //             const formattedRepos = data.map(repo => {
            //                 return {
            //                     Name: repo.name,
            //                     Description: repo.description,
            //                     Link: repo['html_url'],
            //                     id: repo.id
            //                 }
            //             })
            //             repoArray = formattedRepos
            //             console.log(repoArray);
            //             repo = repoArray.find(repo => repo.Name === params.repoID)
            //             setIsLoading(false)
            //         })
            // }
            // useEffect(() => {
            //     getRepos()
            // }, [])
        
        
        
            // let repo = repoArray.find(repo => repo.Name === params.repoID)   
            // console.log(repo); 
            // { !loading && repo }
        
            // console.log(repoArray);
        
        
            // let content;
            // if (!loading) {
            //     content = <HighlightedRepo name={repo.Name} repoURL={repo.Link} />
            // } else {
            //     content = <p>Something is wrong</p>
            // }
