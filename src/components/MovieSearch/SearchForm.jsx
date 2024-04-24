/** @format */

import React, { useState } from "react";
import { Button } from "../ui/button";
import search from "../../../public/search.png";

const SearchForm = ({ onSearch }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		console.log(title);
		e.preventDefault();
		onSearch({ title });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-row w-full pt-[30px] px-[20px] font-rosario'>
			<img
				className='w-[30px] h-[30px] my-auto mr-[5px]'
				src={search}
				alt='search.png'
			/>
			<input
				type='text'
				placeholder='What film are you looking for?'
				className='w-[230px] h-[50px] pl-[5px] mx-auto mt-[3px] bg-[#fff7e9] rounded-xl border-[#a60000] border-[2px]'
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Button
				variant='submit'
				onClick={handleSubmit}
				className='w-[70px] h-[50px] mx-auto mt-[3px] text-[#a60000] bg-[#fff7e9] rounded-full active:bg-[#a60000] active:text-white focus:bg-[#a60000] focus:text-white'>
				<p className='w-[76px] font-bold text-[15px] text-center tracking-[0] leading-[normal]'>
					Search
				</p>
			</Button>
		</form>
	);
};

export default SearchForm;
