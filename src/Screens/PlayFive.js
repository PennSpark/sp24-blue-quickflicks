/** @format */

import Header from "../components/Header";
import Game from "../components/Game";

import { Toaster } from "../components/ui/toaster";
import PuzzleDataProvider from "../providers/PuzzleDataProvider";
import GameStatusProvider from "../providers/GameStatusProvider";
import NavBar from "../components/NavBar/Navbar.jsx";

function PlayFive() {
	return (
		<PuzzleDataProvider index={4}>
			<GameStatusProvider index={4}>
				<div className='wrapper'>
					<Toaster />
					<Header />
					<Game index={4} />
				</div>
			</GameStatusProvider>
			<NavBar></NavBar>
		</PuzzleDataProvider>
	);
}

export default PlayFive;
