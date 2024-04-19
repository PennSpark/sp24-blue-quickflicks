/** @format */

import React, { useState } from "react";
import SearchForm from "../components/MovieSearch/SearchForm.jsx";
import MovieCard from "../components/MovieSearch/MovieCard.jsx";
import axios from "axios";
import Alert from "@mui/material/Alert";
import QF_logo from "../../public/QF_logo.png";
import NavBar from "../components/NavBar/Navbar.jsx";

function SearchCatalog() {
	const [searchResults, setSearchResults] = useState({});
	const [error, setError] = useState(null);

	const key = "f2e3394c";

	const handleSearch = async (searchParams) => {
		try {
			const response = await axios.get(
				`http://www.omdbapi.com/?apikey=${key}&t=` +
					searchParams.title.replace(/ /g, "+")
			);
			setSearchResults(response.data);
			console.log(response.data.poster);
			setError("");
		} catch (err) {
			setSearchResults([]);
			setError(
				err.response ? err.response.data.error : "An error occurred"
			);
		}
	};

	return (
		<div className='bg-[#1e1e1e]'>
			<div className='w-[390px] h-[812px] top-0 left-0 overflow-hidden'>
				<img
					className='w-[40%] mt-[40px] ml-auto mr-auto'
					alt='QF_logo'
					src={QF_logo}
				/>
				<SearchForm onSearch={handleSearch} />
				{error && (
					<Alert
						className='mt-[30px] w-[350px] mx-auto'
						variant='filled'
						severity='error'>
						{error}
					</Alert>
				)}
				{searchResults.length > 0 && (
					<div className='results'>
						<MovieCard
							imagePath={searchResults.poster}
							imdbLink={
								"https://www.imdb.com/title/" +
								searchResults.imdbID
							}
						/>
					</div>
				)}
			</div>
			<NavBar></NavBar>
		</div>
	);
}

export default SearchCatalog;
