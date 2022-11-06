import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import HighlightedRepo from './HighlightedRepo';

let repoArray = [];
// let repo = true

const SingleRepo = (props) => {
    const [loading, setIsLoading] = useState(true)

    const getRepos = async function () {
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
                repoArray = formattedRepos
                console.log(repoArray);
                repo = repoArray.find(repo => repo.Name === params.repoID)
                setIsLoading(false)
            })
    }
    useEffect(() => {
        getRepos()
    }, [])


    const params = useParams()

    let repo = repoArray.find(repo => repo.Name === params.repoID)   
    console.log(repo); 
    // { !loading && repo }

    console.log(repoArray);


    // let content;
    // if (!loading) {
    //     content = <HighlightedRepo name={repo.Name} repoURL={repo.Link} />
    // } else {
    //     content = <p>Something is wrong</p>
    // }

    

        return (!loading &&
            <>
                <h1>Repo Details</h1>
                {/* {content} */}
                <div>
                    <h2>
                        Name - {params.repoId}
                    </h2>
                </div>
            </>
        )

}

export default SingleRepo
