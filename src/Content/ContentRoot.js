import React from 'react'
import ContentList from './ContentList'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HtmlPage from '../info/HtmlPage'
import Head from '../info/Head'
import { Context } from './Context'
import Navbar from '../navigation/Navbar'

const ContentRoot = () => {
  let [selectState, setSelect] = React.useState({ select: false })
  let [contentElems, setContent] = React.useState([

    {
      title: "Терминология HTML и средства разработки",
      description: `HTML (HyperText Markup Language, язык разметки гипертекста) — это система верстки, которая 
      определяет, как и какие элементы должны располагаться на веб-странице. Информация на сайте, способ ее 
      представления и оформления зависят исключительно от разработчика и тех целей, которые он перед собой ставит `,
      selected: false,
      path: '/html',
      id: 0 

    },
    {
      title: "Тэг Head", description: "Беды с башкой",
      selected: false,
      path: '/head',
      id: 1
    }
  ])





  //console.log(contentElems)
  let ChangeState = (val) => setSelect({
    select: val
  })
  let [elChanged, changeEl] = React.useState({ id: 0 })


  let Content = id => {
    changeEl({ id: id })
    setContent(
      contentElems.map((el) => {
        if (el.id === id) {
          el.selected = true
          ChangeState(true)
        }
        return el
      })
    )
  }


  return (
    <Context.Provider value={{ ChangeState, contentElems, elChanged }}>
      <Router>

        <Switch>
          {/* <Route exact path = "/" component = {ContentRoot}/> */}
          <Route path="/html" component={HtmlPage} />
          <Route path="/head" component={Head} />
        </Switch>
        <div className="content-root">
          <ContentList
            contentElems={contentElems}
            selectState={selectState}
            setContent={Content}
          />


        </div>
      </Router>
    </Context.Provider>
  )
}
ContentRoot.propTypes = {
  setDeskription: PropTypes.func.isRequired
}

export default ContentRoot
