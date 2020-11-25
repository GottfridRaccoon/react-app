import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { Context } from '../Content/Context'

const Navbar = () => {
	let { ChangeState, contentElems, elChanged } = useContext(Context)// вызываем контекст и передаем в него функцию changeState

	let pathto = ""
	for (let i = 0; i < contentElems.length; i++) {
		if (i === elChanged.id) {
			i++
			pathto = contentElems[i].path
			console.log(pathto)
		}

	}

	return (
		<div className="navbar-root">
			<nav>
				<Link to="/" ><p onClick={() => ChangeState(false)}> <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24" width="26"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path fill="#ffffff" d="M3 5v14h17V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm13 2H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z" /></svg>На главную</p></Link>
				<Link to={pathto.toString()} >	<p> <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path fill="#ffffff" d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" /></svg>К следующей статье</p></Link>
			</nav>
		</div>
	)
	//TODO :  forEach (prop++) если не находит то удалить элемент
	//TODO: Свяжи корень с контекстом и удали selected

}

export default Navbar