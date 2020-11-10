import React from 'react';

const PiecePage = ({ current, clasStyle, top, left, rotate, modifyTurn }) => (
	<img
		// style={{top: top + "px", left: left + "px", transform: `rotate(${rotate}deg)`}}
		style={{
			top: ((rotate === 0 || rotate === 180 || modifyTurn) ? top : -12 + top) + "px", 
			left: ((rotate === 0 || rotate === 180 || modifyTurn) ? left : left + 12) + "px", 
			transform: `rotate(${rotate}deg)`
		}}

		// style={{
		// 	top: ((rotate === 0 || rotate === 180) ? 0 : -12) + "px", 
		// 	left: ((rotate === 0 || rotate === 180) ? 84 : 96) + "px", 
		// 	transform: `rotate(${rotate}deg)`
		// }} 
		src={current} 
		alt="cube" 
		className="stage__piece"
	/>
)

export default PiecePage;