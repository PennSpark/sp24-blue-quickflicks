/** @format */
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { loadProgressToLocalStorage } from "../lib/local-storage";
import NavBar from "../components/NavBar/Navbar.jsx";
import QF_logo from "../../public/QF_logo.png";

function Play() {
	var loadedProgress = loadProgressToLocalStorage();
	if (loadedProgress == null) loadedProgress = [];
	const [index, setIndex] = useState("");

	const navigate = useNavigate();

	const playGame = (i) => {
		console.log("setting index " + i);
		setIndex(i);
	};

	useEffect(() => {
		if (index !== "") {
			navigate("/play/" + index);
		}
	}, [index]);

	return (
		<div className='bg-[#1e1e1e]'>
			<div className='w-[390px] h-[812px] top-0 left-0 rounded-[40px] overflow-hidden text-center'>
				<img
					className='w-[40%] mt-[40px] ml-auto mr-auto'
					alt='QF_logo'
					src={QF_logo}
				/>
				<p className='w-[390px] mt-[50px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
					Select your game!
				</p>
				<div className='flex flex-col w-[305px] h-[258px] mt-[20px] ml-auto mr-auto rounded-[5px] bg-[#fff8eb]'>
					<div className='grid gap-4 grid-cols-3 grid-rows-2 mt-[20px]'>
						<Button
							variant='submit'
							onClick={() => playGame("one")}
							className='w-[60px] h-[60px] mt-[7px] mx-auto
							bg-[#a60000] rounded-xl'>
							<p className='w-[76px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
								1
							</p>
						</Button>
						<Button
							variant='submit'
							onClick={() => playGame("two")}
							disabled={loadedProgress.length < 1}
							className='w-[60px] h-[60px] mt-[7px] mx-auto bg-[#a60000] rounded-xl'>
							<p className='w-[76px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
								2
							</p>
						</Button>
						<Button
							variant='submit'
							onClick={() => playGame("three")}
							disabled={loadedProgress.length < 2}
							className='w-[60px] h-[60px] mt-[7px] mx-auto bg-[#a60000] rounded-xl'>
							<p className='w-[76px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
								3
							</p>
						</Button>
						<Button
							variant='submit'
							onClick={() => playGame("four")}
							disabled={loadedProgress.length < 3}
							className='w-[60px] h-[60px] mt-[7px] mx-auto bg-[#a60000] rounded-xl'>
							<p className='w-[76px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
								4
							</p>
						</Button>
						<Button
							variant='submit'
							onClick={() => playGame("five")}
							disabled={loadedProgress.length < 4}
							className='w-[60px] h-[60px] mt-[7px] mx-auto bg-[#a60000] rounded-xl'>
							<p className='w-[76px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
								5
							</p>
						</Button>
						<Button
							variant='submit'
							onClick={() => playGame("six")}
							disabled={loadedProgress.length < 5}
							className='w-[60px] h-[60px] mt-[7px] mx-auto bg-[#a60000] rounded-xl'>
							<p className='w-[76px] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]'>
								6
							</p>
						</Button>
					</div>
					{/* <img
						className='w-[92px] h-[86px] mt-[20px] ml-auto mr-auto'
						alt='bookends_logo'
						src={bookends_logo}
					/>
					<p className='pt-[10px] font-bold text-[#a70100] text-[30px] text-center tracking-[0] leading-[normal]'>
						Bookends
					</p> */}
				</div>
				<div className='w-[305px] h-[50px] mt-[-50px] ml-auto mr-auto bg-[#a60000] rounded-[5px]'>
					<p className='w-[305px] pt-[5px] font-bold text-white text-[16px] text-center tracking-[0] leading-[normal]'>
						Test your film knowledge, <br />
						If you lose, discover more about a film!
					</p>
				</div>
			</div>
			<NavBar></NavBar>
		</div>
	);
}

export default Play;
