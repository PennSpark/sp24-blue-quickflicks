/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";

function PlayThree() {
	return (
		<PuzzleDataProvider index={2}>
			<GameStatusProvider index={2}>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={2} />
				</div>
			</GameStatusProvider>
			<NavBar></NavBar>
		</PuzzleDataProvider>
	);
}

export default PlayThree;
