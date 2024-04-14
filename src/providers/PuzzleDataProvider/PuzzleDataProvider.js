/** @format */

import React from "react";
import { getSolution } from "../../lib/time-utils";

export const PuzzleDataContext = React.createContext();

function PuzzleDataProvider({ children }) {
	const [gameData, setGameData] = React.useState(
		getSolution(0).puzzleAnswers
	);
	const categorySize = gameData[0].words.length;
	const numCategories = gameData.length;
	return (
		<PuzzleDataContext.Provider
			value={{ gameData, numCategories, categorySize }}>
			{children}
		</PuzzleDataContext.Provider>
	);
}

export default PuzzleDataProvider;
