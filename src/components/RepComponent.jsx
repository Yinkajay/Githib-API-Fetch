import React from 'react'
import styles from './RepComponent.module.css'
import { Link } from 'react-router-dom'
import { FaGithubAlt } from 'react-icons/fa';

const RepComponent = (props) => {
  return (
    <div className={styles['repo-card']} key={props.id}>
      <FaGithubAlt style={{fontSize: '30px'}}/>
      <h2 className={styles['repo-name']}>Repository Name - <span className={styles['name-span']}>{props.name}</span></h2>
      <section>
        <Link to={`/repos/${props.name}`} state={{name: props.name, description: props.description, url:props.link, }}>
          <button className={styles['repo-btn']}>
            Repo Details
          </button>
        </Link>
      </section>
    </div>
  )
}

export default RepComponent;
