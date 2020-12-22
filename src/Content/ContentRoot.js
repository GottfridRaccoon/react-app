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
import Yakor from "../info/Yakor"
import LinksHtml from '../info/LinksHtml'
import ElRoot from '../elRoot/ElRoot'
import PicturesHtml from "../info/PicturesHtml"

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
      comp: <HtmlPage />
    },
    {
      title: "Тэги", description: `Чтобы браузер при отображении документа понимал, что имеет дело не с простым текстом,
      а с элементом форматирования и применяются теги.`,
      selected: false,
      path: '/tags',
      id: 1
      , comp: <Tags />

    },
    {
      title: "Структура HTML-кода.",
      description: "Если открыть любую веб-страницу, то она будет содержать в себе типичные элементы, которые не меняются от вида и направленности сайта. ", selected: false, path: "/pages", id: 2, comp: <HtmlStructure />

    },
    {
      title: "Типы тэгов",
      description: "<bloquote>, <div>, <ul>,<html>,<head>,<title>,<meta>,<h1>,...,<h6>,<hr>,<br>,<pre>,<a>,<b>,<big>,<em>,<head>",
      selected: false,
      path: "/typetags",
      id: 3, comp: <TypeTags />

    },
    {
      title: "Значения атрибутов тегов",
      description: ' Атрибуты тегов расширяют возможности самих тегов и позволяют гибко управлять различными настройками отображения элементов веб-страницы. Общее количество атрибутов достаточно велико, но их значения, как правило, можно сгруппировать по разным типам, например, задающих цвет, размер, адрес и др. Далее рассмотрим основные типы значений.',
      selected: false,
      path: "/tagattr",
      id: 4,
      comp: <TagAttr />
    },
    {
      title: "Текст",
      description: "Прежде чем редактировать код веб-страницы, следует принять во внимание некоторые особенности, которые присущи HTML при работе с текстом."
      , path: "/texthtml"
      ,
      id: 5, comp: <TextHtml />

    },
    {
      selected: false, title: "Ссылки", description: "Ссылки являются основой гипертекстовых документов и позволяют переходить с одной веб-страницы на другую. Особенность их состоит в том, что сама ссылка может вести не только на HTML-файлы, но и на файл любого типа, причем этот файл может размещаться совсем на другом сайте. Главное, чтобы к документу, на который делается ссылка, был доступ. Иными словами, если путь к файлу можно указать в адресной строке браузера, и файл при этом будет открыт, то на него можно сделать ссылку.", path: "/links", id: 6,
      comp: <LinksHtml />
    }
    , {
      title: "Якоря",
      selected: false,
      description: "Якорем называется закладка с уникальным именем на определенном месте веб-страницы, предназначенная для создания перехода к ней по ссылке. Якоря удобно применять в документах большого объема, чтобы можно было быстро переходить к нужному разделу."
      , id: 7, path: "/yakor", comp: <Yakor />
    },
    {
      selected: false,
      title: "Изображения",
      description: "Добавление изображения происходит в два этапа: вначале готовится графический файл желаемого размера, затем он добавляется на страницу через тег <img>. Сам HTML предназначен только для того, чтобы отобразить требуемую картинку, при этом никак ее не меняя."
      , id: 7, path: "/picturehtml", comp: <PicturesHtml />
    }
  ])

  let ChangeState = (val) => setSelect({
    select: val
  })
  let [elChanged, changeEl] = React.useState({ id: 0 })

  let Content = id => {//запись идентификатора в стэйт
    changeEl({ id: id })// запись айди
    console.log(elChanged)
    setContent(
      contentElems.map((el) => {//поиск выбранного идентификатора из компонента
        if (el.id === id) {
          el.selected = true
          ChangeState(true) // элемент выбран
        }
        return el
      })
    )
  }

  return (
    <Context.Provider value={{ ChangeState, contentElems, elChanged, changeEl }}> 
    
      <Router>
        <Switch>
          {
            contentElems.map(el => <Route exact path={el.path} render={(props) => <ElRoot {...props} prop={el} content={el.comp} />} />)
    //маршрутизация компонентов
    }

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
  elChanged: PropTypes.object,
  Content: PropTypes.func,
  changeEl: PropTypes.func,
  selectState: PropTypes.object,
  contentElems: PropTypes.object
}
export default ContentRoot
