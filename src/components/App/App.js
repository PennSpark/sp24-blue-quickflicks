import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PlayConnections from "../Screens/PlayConnections";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<PlayConnections />} />
				{/* <Route path="/home" element={<MainScreen />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
