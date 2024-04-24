/** @format */

import React, { useState } from "react";
import SearchForm from "../components/MovieSearch/SearchForm.jsx";
import MovieCard from "../components/MovieSearch/MovieCard.jsx";
import axios from "axios";
import Alert from "@mui/material/Alert";
import QF_logo from "../../public/QF_logo.png";
import NavBar from "../components/NavBar/Navbar.jsx";
import InfoModal from "../components/modals/InfoModal";
import { Info } from "lucide-react";

function SearchCatalog() {
	const [searchResults, setSearchResults] = useState(null);
	const [error, setError] = useState(null);

	const key = "f2e3394c";

	const handleSearch = async (searchParams) => {
		try {
			const response = await axios.get(
				`https://www.omdbapi.com/?apikey=${key}&t=` +
					searchParams.title.replace(/ /g, "+")
			);
			setSearchResults(response.data);
			console.log(response.data.Poster);
			console.log(
				`https://www.omdbapi.com/?apikey=${key}&t=` +
					searchParams.title.replace(/ /g, "+")
			);
			setError(null);
		} catch (err) {
			setSearchResults([]);
			setError(
				err.response ? err.response.data.error : "An error occurred"
			);
		}
	};

	return (
		<div className='relative bg-[#1e1e1e] w-full h-full'>
			<div className='w-full h-full top-0 left-0 overflow-hidden'>
				<div className='mt-[43px] absolute top-0 right-0'>
					<InfoModal
						trigger={<Info className='mr-4 stroke-white' />}
					/>
				</div>
				<img
					className='w-[40%] mt-[36px] ml-auto mr-auto'
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
				{searchResults && (
					<div className='results'>
						<MovieCard
							imagePath={searchResults.Poster}
							imdbLink={
								"https://www.imdb.com/title/" +
								searchResults.imdbID
							}
							title={searchResults.Title}
							year={searchResults.Year}
							imdbRating={searchResults.imdbRating}
						/>
					</div>
				)}
			</div>
			<NavBar></NavBar>
		</div>
	);
}

export default SearchCatalog;
