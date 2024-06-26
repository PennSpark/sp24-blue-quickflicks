/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";
import NavBar from "../components/NavBar/Navbar.jsx";

function PlaySix() {
	return (
		<PuzzleDataProvider index={5}>
			<GameStatusProvider index={5}>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={5} />
				</div>
			</GameStatusProvider>
			<NavBar></NavBar>
		</PuzzleDataProvider>
	);
}

export default PlaySix;
