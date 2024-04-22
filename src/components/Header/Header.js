/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import InfoModal from "../modals/InfoModal";
import { ChevronLeftCircleIcon } from "lucide-react";
import { Info } from "lucide-react";

function Header() {
	const navigate = useNavigate();

	const home = () => {
		navigate("/");
	};
	return (
		<header>
			<ChevronLeftCircleIcon
				onClick={() => home()}
				className='w-[25px] h-[25px] ml-[16px] mt-[23px]'
			/>
			<h1 className='font-rosario font-bold text-[#a70100] text-[30px]'>
				Bookends
			</h1>
			<InfoModal trigger={<Info className='mr-4' />} />
		</header>
	);
}

export default Header;
