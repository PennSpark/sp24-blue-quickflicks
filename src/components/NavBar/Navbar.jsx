/** @format */

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PuzzleIcon, Search } from "lucide-react";

function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = (pathname) => {
		return location.pathname === pathname ? true : false;
	};

	const home = () => {
		navigate("/");
	};

	const search = () => {
		navigate("/search");
	};

	return (
		<div className='absolute w-[390px] h-[100px] bottom-[100px] bg-[#dd7c7b] flex flex-row border-t-[3px] border-[#fff7e9]'>
			{!isActive("/search") && (
				<div
					className='w-[100] h-[70px] mx-auto pt-[15px] text-[#A70000] text-center border-t-[5px] border-[#A70000]'
					onClick={home}>
					<PuzzleIcon
						className='my-auto mx-auto'
						size={30}
						color='#A70000'
					/>
					<p className='mt-[3px] mx-auto'>games</p>
				</div>
			)}
			{isActive("/search") && (
				<div
					className='w-[100] h-[70px] mx-auto pt-[15px] text-white text-center'
					onClick={home}>
					<PuzzleIcon
						className='my-auto mx-auto'
						size={30}
						color='white'
					/>
					<p className='mt-[3px] mx-auto'>games</p>
				</div>
			)}

			{!isActive("/search") && (
				<div
					className='w-[100] h-[70px] mx-auto pt-[15px] text-white text-center'
					onClick={search}>
					<Search
						className='my-auto mx-auto'
						size={30}
						color='white'
					/>
					<p className='mt-[3px] mx-auto'>discover</p>
				</div>
			)}

			{isActive("/search") && (
				<div
					className='w-[100] h-[70px] mx-auto pt-[15px] text-[#A70000] text-center border-t-[5px] border-[#A70000]'
					onClick={search}>
					<Search
						className='my-auto mx-auto'
						size={30}
						color='#A70000'
					/>
					<p className='mt-[3px] mx-auto'>discover</p>
				</div>
			)}
		</div>
	);
}

export default NavBar;