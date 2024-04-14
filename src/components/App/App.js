/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PlayConnections from "../../Screens/PlayConnections";
import Home from "../../Screens/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/play/one' element={<PlayConnections />} />
			</Routes>
		</Router>
	);
}

export default App;
