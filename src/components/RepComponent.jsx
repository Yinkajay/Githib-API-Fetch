import React from 'react'
import styles from './RepComponent.module.css'

const RepComponent = (props) => {
  return (
    <div className={styles['repo-card']}>
      <h2 className={styles['repo-name']}>Repository Name - {props.name}</h2>
      <h2 className={styles['repo-desc']}>Description - {props.description}</h2>
      <h2 className={styles['repo-link']}>Repo URL - <a href={props.link}>{props.link}</a></h2>
    </div>
  )
}

export default RepComponent;
