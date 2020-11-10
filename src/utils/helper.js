export const createGrids = stage => {
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < 200; i++) {
		const div = document.createElement('div');
		div.classList.add('stage__divider');
		fragment.appendChild(div);
	}

	stage.appendChild(fragment);
}