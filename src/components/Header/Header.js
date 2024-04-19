/** @format */

import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import InfoModal from "../modals/InfoModal";

function Header() {
	const navigate = useNavigate();

	const home = () => {
		navigate("/");
	};
	return (
		<header>
			<Button
				variant='submit'
				onClick={() => home()}
				className='w-[40px] h-[30px] m-auto ml-[16px] bg-[#404040] rounded-full'>
				<p className='w-[76px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
					{"<"}
				</p>
			</Button>
			<h1 className='font-rosario font-bold text-[#a70100] text-[30px]'>
				Bookends
			</h1>
			<InfoModal />
		</header>
	);
}

export default Header;
