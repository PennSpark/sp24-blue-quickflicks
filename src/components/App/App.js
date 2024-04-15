/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PlayOne from "../../Screens/PlayOne";
import Home from "../../Screens/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/play/one' element={<PlayOne />} />
			</Routes>
		</Router>
	);
}

export default App;
