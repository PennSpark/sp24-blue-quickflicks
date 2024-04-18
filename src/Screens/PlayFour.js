/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";

function PlayFour() {
	return (
		<PuzzleDataProvider index={3}>
			<GameStatusProvider>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={3} />
				</div>
			</GameStatusProvider>
		</PuzzleDataProvider>
	);
}

export default PlayFour;
