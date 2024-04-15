/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";

function PlayOne() {
	return (
		<PuzzleDataProvider index={0}>
			<GameStatusProvider>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={0} />
				</div>
			</GameStatusProvider>
		</PuzzleDataProvider>
	);
}

export default PlayOne;
