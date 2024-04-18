/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";

function PlayFive() {
	return (
		<PuzzleDataProvider index={4}>
			<GameStatusProvider>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={4} />
				</div>
			</GameStatusProvider>
		</PuzzleDataProvider>
	);
}

export default PlayFive;
