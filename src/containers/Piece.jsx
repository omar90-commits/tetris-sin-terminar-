import React, { useState, useEffect } from 'react';
import PiecePage from '../components/PiecePage';

const Piece = ({ piecesSelected }) => {

	const body = document.querySelector('body');

	const [top, setTop] = useState(piecesSelected.topInit);
	const [left, setLeft] = useState(piecesSelected.leftInit);
	const [rotate, setRotate] = useState(0);

	useEffect(() => {
		let acumTop = top, acumMove = left;
		let rotatePiece = rotate;
		const { collisionRight, collisionLeft, collisionTop } = piecesSelected;

		let interval = setInterval(() => {
			setTop(acumTop += 24.188);
			if (acumTop > collisionTop) clearInterval(interval);
		}, 1000);


		body.addEventListener('keyup', e => {

			if (e.key === 'ArrowRight' && acumMove < collisionRight) setLeft(acumMove += 24.05);
			
			if (e.key === 'ArrowLeft' && acumMove >= collisionLeft) setLeft(acumMove -= 24.05);

			if (e.key === 'ArrowUp') {
				setRotate(rotatePiece > 180 ? rotatePiece = 0 : rotatePiece += 90);
			}

			// console.log(acumTop + " < " + collisionTop, acumTop < collisionTop)
			// console.log(acumTop, collisionTop)
			// if (e.key === 'ArrowDown' && acumTop < collisionTop) {
				// setTop(acumTop += 48.188);
				// if (acumTop > collisionTop) clearInterval(interval);
				// console.log('entro', acumTop)
			// }
		});

	}, []);
	
	return (
		<PiecePage 
			current={piecesSelected.current}
			clasStyle={piecesSelected.clasStyle}
			modifyTurn={piecesSelected.modifyTurn}
			top={top}
			left={left}
			rotate={rotate}
		/>
	)
}

export default Piece;