import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <>
            <div className={styles['profile-card']}>
                <a className={styles['profile-link']} href='https://github.com/Yinkajay'>
                    <img className={styles['profile-image']} src={props.src} />
                    <h2>Profile Name - {props.name}</h2>
                    <h3>{props.bio}</h3>
                    <h3>{props.followers} followers</h3>
                    <h3>{props.repoNumber} Repositories</h3>
                </a>
            </div>
        </>
    )
}

export default ProfileInfo
