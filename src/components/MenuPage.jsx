import React from 'react';
import OptionsPage from './OptionsPage';
import StatisticsPage from './StatisticsPage';

const MenuPage = ({ nextPiece }) => (
	<React.Fragment>
		<h2 className="mb-3 text-light">Tetris</h2>

		<OptionsPage />

		<div className="mb-3">
			<img src={nextPiece} alt={nextPiece} />
		</div>

		<StatisticsPage />
	</React.Fragment>
)

export default MenuPage;