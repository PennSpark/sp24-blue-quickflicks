/** @format */

import React, { useState } from "react";
import SearchForm from "../components/MovieSearch/SearchForm.jsx";
import MovieCard from "../components/MovieSearch/MovieCard.jsx";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";

function SearchCatalog() {
	const [searchResults, setSearchResults] = useState([]);
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
			{searchResults && (
				<div className='results'>
					<MovieCard
						imagePath={
							"https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg"
						}
						imdbLink={"https://www.imdb.com/title/tt15398776/"}
					/>
				</div>
			)}
		</div>
	);
}

export default SearchCatalog;
