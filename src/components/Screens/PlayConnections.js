import Header from "../Header";
import Game from "../Game";

import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function PlayConnections() {
	return (
		<PuzzleDataProvider>
			<GameStatusProvider>
				<div className="wrapper">
					<Toaster />
					<Header />
					<Game />
				</div>
			</GameStatusProvider>
		</PuzzleDataProvider>
	);
}

export default PlayConnections;
