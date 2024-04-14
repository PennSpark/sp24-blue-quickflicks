/** @format */

import React from "react";
import BaseModal from "../BaseModal";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScoreButton";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameWonModal({ open, submittedGuesses }) {
	const { gameData } = React.useContext(PuzzleDataContext);

	return (
		<BaseModal
			title='You won!'
			initiallyOpen={open}
			footerElements={<ShareScoreButton buttonText={"Share My Score!"} />}
			showActionButton={false}>
			<div className='flex flex-col place-content-center'>
				<p className='text-center font-[600]'>
					Click on each movie to learn more :{`)`}
				</p>
				<span className='text-center whitespace-pre mb-2'>
					{"\n"}
					{generateEmojiGrid(gameData, submittedGuesses)}
				</span>
			</div>
		</BaseModal>
	);
}

export default GameWonModal;
