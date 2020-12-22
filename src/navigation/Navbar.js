
import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { Context } from '../Content/Context'
import previous from "../image/arrow_back-24px.svg"
import nexticon from "../image/arrow_forward-24px.svg"
import home from "../image/apps.svg"
const Navbar = () => {
	let { ChangeState, contentElems, elChanged } = useContext(Context)// вызываем контекст и передаем в него функцию changeState
	let [j, change] = React.useState(elChanged.id)//ссылка на elChanged
	let pathto = contentElems[j].path

	return (
		<div id="navroot" className="navbar-root">
			<nav>
				<Link to="/" ><p onClick={() => ChangeState(false)}><img src={home}></img> На главную</p></Link>
				<Link to={pathto.toString()} id="past" onClick={() => changePathPast()} ><p> <img src={previous} height="24" width="24"  ></img>К предыдущей статье</p></Link>
				<Link to={pathto.toString()} id="next" onClick={() => changePathNext()} >	<p>К следующей статье  <img src={nexticon}></img></p></Link>
			</nav>
		</div>
	)
	function changePathPast(params) {
		
		if (j !== 0) {//переход к следующему элементу стейта запись маршрута

			change(j = j - 1)
			elChanged.id = elChanged.id - 1
			
			console.log(j)
		}
		else {
			pathto = ""
		

		}
	}

	function changePathNext() {//переход на предыдущий элемент

		if (j < contentElems.length - 1) {

			change(j = j + 1)
			elChanged.id = elChanged.id + 1
			
		}
		else if (j >= contentElems.length - 1) {
			pathto = ""
			// 	next.remove()

		}

	}
}

export default Navbar