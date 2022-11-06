import React from 'react'
import styles from './ProfileInfo.module.css'
import {FaGithubSquare} from 'react-icons/fa'

const ProfileInfo = (props) => {
    return (
        <>
            <a className={styles['profile-link']} href='https://github.com/Yinkajay'>
                <div className={styles['profile-card']}>
                    <FaGithubSquare style={{margin: '5px 0', color: '', fontSize: '40px' }}/> <br/>
                    <img className={styles['profile-image']} src={props.src} />
                    <h3>GitHub Profile Name - {props.name}</h3>
                    <h3>{props.bio}</h3>
                    <h3>{props.followers} followers</h3>
                    <h3>{props.repoNumber} Repositories</h3>
                </div>
            </a>
        </>
    )
}

export default ProfileInfo
