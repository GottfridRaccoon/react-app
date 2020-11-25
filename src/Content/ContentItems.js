import SetContent from './SetContent'
import React from 'react'
import PropTypes from 'prop-types'


const ContentItems = ({contentElem,Click})=>{
  return(  
    
  <div >
      <h3>{contentElem.title}</h3>
      <hr className = "title-hr"></hr>
      <p>{contentElem.description}</p>
      <SetContent contentElem={contentElem } setClick={Click} />
  </div>
  )
}
ContentItems.propTypes= {
    contentElem: PropTypes.object.isRequired
}


export default ContentItems