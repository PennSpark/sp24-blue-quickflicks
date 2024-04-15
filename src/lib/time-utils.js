/** @format */

import { CONNECTION_GAMES } from "./data";

export const getPuzzle = (index) => {
	if (index < 0) {
		throw new Error("Invalid index");
	}

	return CONNECTION_GAMES[index % CONNECTION_GAMES.length];
};

export const getSolution = (index) => {
	const puzzle = getPuzzle(index);
	return {
		puzzleAnswers: puzzle,
		puzzleIndex: index,
	};
};
