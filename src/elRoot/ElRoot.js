import React from "react"
import Navigation from "../navigation/Navbar"

const ElRoot = ({ prop, content }) => {
	return (
		<div>
			<Navigation></Navigation>
			<div className="content-container">
				<h2 className="content-title">
					{prop.title}
				</h2>
				{content}
			</div>
		</div>
	)
}

export default ElRoot