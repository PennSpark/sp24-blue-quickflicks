/** @format */

import React, { useState } from "react";
import SearchForm from "../components/MovieSearch/SearchForm.jsx";
import MovieCard from "../components/MovieSearch/MovieCard.jsx";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";

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
		<div className='w-[390px] h-[812px] bg-[#1e1e1e]'>
			<SearchForm onSearch={handleSearch} />
			{error && (
				<Alert
					className='error-display'
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
							"https://www.imdb.com/title/" + searchResults.imdbID
						}
					/>
				</div>
			)}
		</div>
	);
}

export default SearchCatalog;
