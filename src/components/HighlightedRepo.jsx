import React from 'react'

const HighlightedRepo = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.repoURL}</h3>
    </div>
  )
}

export default HighlightedRepo
