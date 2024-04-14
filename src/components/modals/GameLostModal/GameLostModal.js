/** @format */

import React from "react";
import BaseModal from "../BaseModal";
import { SolvedWordRow } from "../../GameGrid";
import ShareScoreButton from "../../ShareScoreButton";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameLostModal({ open }) {
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
			</div>
		</BaseModal>
	);
}

export default GameLostModal;
