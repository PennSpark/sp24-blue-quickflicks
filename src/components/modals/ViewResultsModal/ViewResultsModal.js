/** @format */

import React from "react";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScoreButton";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { Button } from "../../ui/button";

function ViewResultsModal() {
	const { submittedGuesses } = React.useContext(GameStatusContext);
	const { gameData } = React.useContext(PuzzleDataContext);

	return (
		<BaseModal
			title='You Won!'
			trigger={
				<Button
					variant='submit'
					className='w-full bg-[#a70100]'
					children={"View Results"}
				/>
			}
			initiallyOpen={false}
			showActionButton={false}
			footerElements={
				<ShareScoreButton buttonText={"Share My Score!"} />
			}>
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

export default ViewResultsModal;
