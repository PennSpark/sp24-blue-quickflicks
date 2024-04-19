/** @format */

const gameStateKey = "gameState";

export const saveGameStateToLocalStorage = (gameState) => {
	localStorage.setItem(gameStateKey, JSON.stringify(gameState));
};

export const loadGameStateFromLocalStorage = () => {
	const state = localStorage.getItem(gameStateKey);
	return state ? JSON.parse(state) : null;
};

const gameStatKey = "gameStats";

export const saveStatsToLocalStorage = (gameStats) => {
	localStorage.setItem(gameStatKey, JSON.stringify(gameStats));
};

export const loadStatsFromLocalStorage = () => {
	const stats = localStorage.getItem(gameStatKey);
	return stats ? JSON.parse(stats) : null;
};

const gamePrgressKey = "gameProgress";

export const saveProgressToLocalStorage = (progress) => {
	var currProgress = JSON.parse(localStorage.getItem(gamePrgressKey));
	if (currProgress == null) currProgress = [];
	currProgress.push(progress);
	localStorage.setItem(gamePrgressKey, JSON.stringify(currProgress));
};

export const loadProgressToLocalStorage = () => {
	const currProgress = localStorage.getItem(gamePrgressKey);
	return currProgress ? JSON.parse(currProgress) : null;
};
