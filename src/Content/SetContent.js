import React from 'react'

import { Link } from 'react-router-dom'



const SetContent = ({ contentElem, setClick }) => {
  return (
    <div className="button-root">
      <button className="set-content" onClick={() => setClick(contentElem.id)}><Link to={contentElem.path}>Перейти</Link></button>
    </div>
  )
}

export default SetContent