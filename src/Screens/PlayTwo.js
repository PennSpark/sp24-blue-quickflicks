/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";

function PlayTwo() {
	return (
		<PuzzleDataProvider index={1}>
			<GameStatusProvider>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={1} />
				</div>
			</GameStatusProvider>
		</PuzzleDataProvider>
	);
}

export default PlayTwo;
