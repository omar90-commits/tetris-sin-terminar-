import React from 'react';
import Menu from '../containers/Menu';
import Piece from '../containers/Piece';

const StagePage = ({ stageGame, piecesSelected }) => (
	<div className="stage row">
		<div className="stage__statistics col-6 d-flex flex-column justify-content-center text-center p-3">
			<Menu 
				nextPiece={piecesSelected.next}
			/>
		</div>

		<div className="col-6 stage__game py-3">
			<div className="stage__game--grid" ref={stageGame} >
				<Piece 
					piecesSelected={piecesSelected}
				/>
			</div>
		</div>
	</div>
)

export default StagePage;