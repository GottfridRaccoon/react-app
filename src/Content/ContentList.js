import React from 'react'
import PropTypes from 'prop-types'
import ContentItems from './ContentItems'



let ContentList = (props) => {
    let classSet = "";
    // let elems = document.getElementsByClassName('el-content')
    // props.selectState.map((el) => {
    if (props.selectState.select === true) {
        classSet = ' selected'
    } if (props.selectState === true) {
        // Array.from(elems).forEach(element => {
        // element.classList.remove('selected')
        classSet = ""
        // });
    }
    //  return classSet
    // })

    return (





        props.contentElems.map((contentElem) => {
            return (
                <div className={"el-content" + classSet} key={contentElem.id} >
                    <ContentItems contentElem={contentElem} Click={props.setContent} />
                </div>
            )
        }
        )
    )


}

ContentList.PropTypes = {
    contentElems: PropTypes.arrayOf(PropTypes.object),
    Click: PropTypes.func.isRequired
  
}


export default ContentList