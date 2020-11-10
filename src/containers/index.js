import React, { useEffect, useMemo } from 'react';
import StagePage from '../components/StagePage';
import { createGrids } from '../utils/helper';
import larga from '../asseet/iconos/tetris(0).svg';
import L from '../asseet/iconos/tetris(1).svg';
import cube from '../asseet/iconos/tetris(2).svg';
import Z from '../asseet/iconos/tetris(3).svg';
import disparar from '../asseet/iconos/tetris(4).svg';

const Stage = () => {
	
	const stageGame = React.createRef();

	useEffect(() => createGrids(stageGame.current), [stageGame]);

	const piecesSelected = useMemo(() => {
		const typePiece = [larga, L, cube, Z, disparar];
		let topInit = 0, leftInit = 0, collisionLeft = 0, collisionRight = 180,
			collisionTop = 410, modifyTurn = false;

		const current = typePiece[0];
		const next = typePiece[Math.floor(Math.random() * 5)];
		const filterNumber = /[0-4]/;

		switch (Number(current.match(filterNumber)[0])) {
			case 0: 
				topInit = -72; 
				leftInit = 73;
				collisionRight = 193;
				modifyTurn = true;
			break;
			case 1: 
				topInit = -72; 
				leftInit = 84; 
			break;
			case 2: 
				topInit = -48;
				leftInit = 96;
				collisionTop = 420;
				modifyTurn = true;
			break;
			case 3: 
				topInit = -61;
				leftInit = 73;
				collisionLeft = 24; 
				collisionRight = 169;
			break;
			case 4: 
				topInit = -60;
				leftInit = 73;
				collisionLeft = 24; 
				collisionRight = 169;
			break;
			default: return;
		}

		return {current, next, collisionLeft, collisionRight, collisionTop, topInit, leftInit, modifyTurn};
	}, []);
	
	return (
		<StagePage 
			stageGame={stageGame}
			piecesSelected={piecesSelected}
		/>
	)
}

export default React.memo(Stage);