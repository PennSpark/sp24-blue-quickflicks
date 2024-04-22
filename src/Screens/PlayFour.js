/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";
import NavBar from "../components/NavBar/Navbar.jsx";

function PlayFour() {
	return (
		<PuzzleDataProvider index={3}>
			<GameStatusProvider index={3}>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={3} />
				</div>
			</GameStatusProvider>
			<NavBar></NavBar>
		</PuzzleDataProvider>
	);
}

export default PlayFour;
