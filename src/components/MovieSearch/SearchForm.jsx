/** @format */

import React, { useState } from "react";
import { Button } from "../ui/button";
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
			<input
				type='text'
				placeholder='Search for a movie title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Button
				variant='submit'
				onClick={handleSubmit}
				className='w-[70px] h-[50px] mx-auto mt-[3px] bg-white rounded-full active:bg-[#dd7c7b] focus:bg-[#dd7c7b]'>
				<p className='w-[76px] font-bold text-[#a60000] text-[15px] text-center tracking-[0] leading-[normal]'>
					Search
				</p>
			</Button>
		</form>
	);
};

export default SearchForm;
