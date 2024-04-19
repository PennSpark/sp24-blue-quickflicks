/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PlayOne from "../../Screens/PlayOne";
import PlayTwo from "../../Screens/PlayTwo";
import PlayThree from "../../Screens/PlayThree";
import PlayFour from "../../Screens/PlayFour";
import PlayFive from "../../Screens/PlayFive";
import PlaySix from "../../Screens/PlaySix";
import Play from "../../Screens/Play";
import Home from "../../Screens/Home";
import SearchCatalog from "../../Screens/SearchCatalog";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/play' element={<Play />} />
				<Route path='/search' element={<SearchCatalog />} />
				<Route path='/play/one' element={<PlayOne />} />
				<Route path='/play/two' element={<PlayTwo />} />
				<Route path='/play/three' element={<PlayThree />} />
				<Route path='/play/four' element={<PlayFour />} />
				<Route path='/play/five' element={<PlayFive />} />
				<Route path='/play/six' element={<PlaySix />} />
			</Routes>
		</Router>
	);
}

export default App;
