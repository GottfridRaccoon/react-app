import React from 'react'
import ContentList from './ContentList'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HtmlPage from '../info/HtmlPage'
import Tags from '../info/Tags'
import HtmlStructure from '../info/HtmlSructure'
import { Context } from './Context'
import TypeTags from "../info/TypeTags"
import TagAttr from '../info/TagAttr'
import TextHtml from '../info/TextHtml'

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
      id: 0,
      comp: HtmlPage
    },
    {
      title: "Тэги", description: `Чтобы браузер при отображении документа понимал, что имеет дело не с простым текстом,
      а с элементом форматирования и применяются теги.`,
      selected: false,
      path: '/tags',
      id: 1
      , comp: Tags

    },
    {
      title: "Структура HTML-кода.",
      description: "Если открыть любую веб-страницу, то она будет содержать в себе типичные элементы, которые не меняются от вида и направленности сайта. ", selected: false, path: "/pages", id: 2

    },
    {
      title: "Типы тэгов",
      description: "<bloquote>, <div>, <ul>,<html>,<head>,<title>,<meta>,<h1>,...,<h6>,<hr>,<br>,<pre>,<a>,<b>,<big>,<em>,<head>",
      selected: false,
      path: "/typetags",
      id: 3
    },
    {
      title: "Значения атрибутов тегов",
      description: ' Атрибуты тегов расширяют возможности самих тегов и позволяют гибко управлять различными настройками отображения элементов веб-страницы. Общее количество атрибутов достаточно велико, но их значения, как правило, можно сгруппировать по разным типам, например, задающих цвет, размер, адрес и др. Далее рассмотрим основные типы значений.',
      selected: false,
      path: "/tagattr",
      id: 4,

    },
    {
      title: "Текст",
      description: "Прежде чем редактировать код веб-страницы, следует принять во внимание некоторые особенности, которые присущи HTML при работе с текстом."
      , path: "/texthtml"
      ,
      id: 5

    }
  ])

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
    <Context.Provider value={{ ChangeState, contentElems, elChanged, changeEl }}>
      <Router>
        <Switch>
          <Route exact path="/html" component={HtmlPage} />
          {/* <Route exact path="/" component={ContentRoot} />  */}
          <Route path="/tags" component={Tags} />
          <Route path="/pages" component={HtmlStructure} />
          <Route path="/typetags" component={TypeTags} />
          <Route path="/tagattr" component={TagAttr} />
          <Route path="/texthtml" component={TextHtml} />
          {/* {contentElems.forEach(e => <Route path={e.path.toString()} component={e["comp"]} />)} */}

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
 
}
export default ContentRoot
