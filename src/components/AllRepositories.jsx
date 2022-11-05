import React from 'react'
import { Link } from 'react-router-dom'
import RepComponent from './RepComponent'

const AllRepositories = (props) => {
    return (
        <>
            {props.list.map((Repo) => (
                    <RepComponent
                        key={Repo.id}
                        name={Repo.Name}
                        description={Repo.Description}
                        link={Repo.Link}
                    />
            ))}
        </>
    )
}

export default AllRepositories
