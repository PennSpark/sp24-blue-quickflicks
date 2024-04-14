/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";

function PlayConnections() {
	return (
		<PuzzleDataProvider>
			<GameStatusProvider>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game />
				</div>
			</GameStatusProvider>
		</PuzzleDataProvider>
	);
}

export default PlayConnections;
