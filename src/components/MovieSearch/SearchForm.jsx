/** @format */

import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const SearchForm = ({ onSearch }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch({ title });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-row w-[390px] pt-[100px] px-[50px] font-rosario'>
			<TextField
				id='filled-basic'
				label='Movie'
				variant='filled'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Button type='submit' variant='contained'>
				Search
			</Button>
		</form>
	);
};

export default SearchForm;
