/** @format */

import { UAParser } from "ua-parser-js";

import { GAME_TITLE } from "./constants";
import { getSolution } from "./time-utils";
import { generateEmojiGrid } from "./game-helpers";

// Share logic from here: https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/share.ts
const webShareApiDeviceTypes = ["mobile", "smarttv", "wearable"];
const parser = new UAParser();
const browser = parser.getBrowser();
const device = parser.getDevice();

function wordToInt(word) {
	const wordMap = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
	};

	return wordMap[word];
}

export const shareStatus = (
	gameData,
	submittedGuesses,
	handleShareToClipboard,
	handleShareFailure,
	includeGameLink = true
) => {
	const GAME_URL = window.location.href;
	const parts = GAME_URL.split("/");
	const textToShare =
		`${GAME_TITLE} #${wordToInt(parts[parts.length - 1])}\n\n` +
		generateEmojiGrid(gameData, submittedGuesses, true) +
		`${includeGameLink ? "\n\n" + GAME_URL : ""}`;

	const shareData = { text: textToShare };

	let shareSuccess = false;

	try {
		if (attemptShare(shareData)) {
			navigator.share(shareData);
			shareSuccess = true;
		}
	} catch (error) {
		shareSuccess = false;
	}

	try {
		if (!shareSuccess) {
			if (navigator.clipboard) {
				navigator.clipboard
					.writeText(textToShare)
					.then(handleShareToClipboard)
					.catch(handleShareFailure);
			} else {
				handleShareFailure();
			}
		}
	} catch (error) {
		handleShareFailure();
	}
};

const attemptShare = (shareData) => {
	return (
		// Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
		browser.name?.toUpperCase().indexOf("FIREFOX") === -1 &&
		webShareApiDeviceTypes.indexOf(device.type ?? "") !== -1 &&
		navigator.canShare &&
		navigator.canShare(shareData) &&
		navigator.share
	);
};
