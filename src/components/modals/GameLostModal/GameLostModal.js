/** @format */

import React from "react";
import BaseModal from "../BaseModal";
import { SolvedWordRow } from "../../GameGrid";
import ShareScoreButton from "../../ShareScoreButton";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { generateEmojiGrid } from "../../../lib/game-helpers";

function GameLostModal({ open, submittedGuesses }) {
	const { gameData } = React.useContext(PuzzleDataContext);

	return (
		<BaseModal
			title={"You'll get it next time!"}
			initiallyOpen={open}
			footerElements={<ShareScoreButton />}
			showActionButton={false}>
			<div className='grid gap-y-2'>
				<p className='font-rosario text-lg font-[500] text-center'>
					Click on each movie to learn more :{")"}
				</p>
				<span className='text-center whitespace-pre mb-2'>
					{"\n"}
					{generateEmojiGrid(gameData, submittedGuesses)}
				</span>
			</div>
		</BaseModal>
	);
}

export default GameLostModal;
