/** @format */
import bookends_logo from "../../public/bookends_logo.png";
import QF_logo from "../../public/QF_logo.png";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar.jsx";
import InfoModal from "../components/modals/InfoModal";
import { Info } from "lucide-react";

function Home() {
	const navigate = useNavigate();

	const play = () => {
		navigate("/play");
	};
	return (
		<div className='relative bg-[#1e1e1e] w-full h-full'>
			<div className='w-full h-full overflow-scroll text-center'>
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

				<p className='w-full mt-[50px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
					Welcome to QuickFlicks!
				</p>
				<div className='flex flex-col w-[305px] h-[258px] mt-[20px] ml-auto mr-auto rounded-[5px] bg-[#fff8eb]'>
					<img
						className='w-[92px] h-[86px] mt-[20px] ml-auto mr-auto'
						alt='bookends_logo'
						src={bookends_logo}
					/>
					<p className='pt-[10px] font-bold text-[#a70100] text-[30px] text-center tracking-[0] leading-[normal]'>
						Bookends
					</p>
				</div>
				<div className='w-[305px] h-[100px] mt-[-100px] ml-auto mr-auto bg-[#a60000] rounded-[5px]'>
					<p className='w-[305px] pt-[10px] font-bold text-white text-[16px] text-center tracking-[0] leading-[normal]'>
						Click tiles to create movie groupings!
					</p>
					<Button
						variant='submit'
						onClick={play}
						className='w-[150px] h-[50px] mt-[7px] bg-white rounded-full'>
						<p className='w-[76px] font-bold text-[#a60000] text-[15px] text-center tracking-[0] leading-[normal]'>
							Play Now
						</p>
					</Button>
				</div>
				<NavBar></NavBar>
			</div>
		</div>
	);
}

export default Home;
