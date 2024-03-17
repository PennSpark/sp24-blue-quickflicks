import React from "react";
import "../app/globals.css";
import Link from "next/link";

const Login = (): JSX.Element => {
	return (
		<div className="w-screen h-screen bg-[#1E1E1E]">
			<div className="flex items-center justify-center">
				<img
					className="w-[318px] h-[219px] my-[70px] object-cover"
					alt="logo"
					src="https://c.animaapp.com/VcNKCD5v/img/screen-shot-2023-12-02-at-9-44-1@2x.png"
				/>
			</div>
			<div className="relative flex flex-col items-center justify-center overflow-hidden">
				<div className="w-[155px] h-[56px]">
					<div className="w-[150px] h-[50px] left-autofont-medium text-[30px] text-[#a60000] text-center bg-white rounded-full">
						<span className="inline-block align-middle">
							<Link href="/CreateProfile">LOG IN</Link>
						</span>
					</div>

					<p className="mt-[5px] font-normal text-transparent text-[13px] text-center">
						<span className="font-bold italic underline text-[#f77e7e]">
							forgot password?
						</span>
					</p>
				</div>
				<div className="w-[155px] h-[56px] mt-[40px]">
					<div className="w-[150px] h-[50px] left-auto font-medium text-[30px] text-[#a60000] text-center bg-white rounded-full">
						<span className="inline-block align-middle">
							SIGN UP
						</span>
					</div>
				</div>
				<div className="flex mt-[30px]">
					<div className="mx-[5px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
						<img
							className="w-[40px] h-[40px] mx-[5px]"
							alt="Vector"
							src="https://c.animaapp.com/VcNKCD5v/img/vector-1.svg"
						/>
					</div>
					<div className="mx-[5px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
						<img
							className="w-[40px] h-[40px] mx-[5px]"
							alt="Vector"
							src="https://c.animaapp.com/VcNKCD5v/img/vector.svg"
						/>
					</div>
					<div className="mx-[5px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
						<div className="w-[40px] h-[40px] mx-[5px] text-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
								className="inline-block align-middle text-[35px] pb-[15px] text-[#F87F7F] text-bold"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
