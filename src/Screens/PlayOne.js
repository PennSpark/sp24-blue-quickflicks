/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";
import NavBar from "../components/NavBar/Navbar.jsx";

function PlayOne() {
	return (
		<PuzzleDataProvider index={0}>
			<GameStatusProvider index={0}>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={0} />
				</div>
			</GameStatusProvider>
			<NavBar></NavBar>
		</PuzzleDataProvider>
	);
}

export default PlayOne;
