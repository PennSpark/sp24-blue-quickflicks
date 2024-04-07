import React from "react";

import InfoModal from "../modals/InfoModal";

function Header() {
	return (
		<header>
			<h1 className="font-rosario font-bold text-[#a70100] text-[30px] pl-[20px]">
				Bookends
			</h1>
			<InfoModal />
		</header>
	);
}

export default Header;
