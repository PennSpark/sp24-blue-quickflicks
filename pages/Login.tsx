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
				<div className="flex mt-[60px]">
					<div className="mx-[5px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
						<img
							className="w-[35px] h-[35px] m-[5px]"
							alt="Vector"
							src="https://c.animaapp.com/VcNKCD5v/img/vector-1.svg"
						/>
					</div>
					<div className="mx-[5px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
						<img
							className="w-[35px] h-[35px] m-[5px]"
							alt="Vector"
							src="https://c.animaapp.com/VcNKCD5v/img/vector.svg"
						/>
					</div>
					<div className="mx-[5px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
						<div className="w-[35px] h-[35px] m-[5px]">
							<img
								alt="svgImg"
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmODdmN2YiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTI4LDYuOTM3Yy0wLjk1NywwLjQyNSAtMS45ODUsMC43MTEgLTMuMDY0LDAuODRjMS4xMDIsLTAuNjYgMS45NDcsLTEuNzA1IDIuMzQ1LC0yLjk1MWMtMS4wMywwLjYxMSAtMi4xNzIsMS4wNTUgLTMuMzg4LDEuMjk1Yy0wLjk3MywtMS4wMzcgLTIuMzU5LC0xLjY4NSAtMy44OTMsLTEuNjg1Yy0yLjk0NiwwIC01LjMzNCwyLjM4OSAtNS4zMzQsNS4zMzRjMCwwLjQxOCAwLjA0OCwwLjgyNiAwLjEzOCwxLjIxNWMtNC40MzMsLTAuMjIyIC04LjM2MywtMi4zNDYgLTEwLjk5NSwtNS41NzRjLTAuNDU4LDAuNzg4IC0wLjcyMSwxLjcwNCAtMC43MjEsMi42ODNjMCwxLjg1IDAuOTQxLDMuNDgzIDIuMzcyLDQuNDM5Yy0wLjg3NCwtMC4wMjggLTEuNjk3LC0wLjI2OCAtMi40MTYsLTAuNjY3YzAsMC4wMjMgMCwwLjA0NCAwLDAuMDY3YzAsMi41ODUgMS44MzgsNC43NDEgNC4yNzksNS4yM2MtMC40NDcsMC4xMjIgLTAuOTE5LDAuMTg3IC0xLjQwNiwwLjE4N2MtMC4zNDMsMCAtMC42NzgsLTAuMDM0IC0xLjAwMywtMC4wOTVjMC42NzksMi4xMTkgMi42NDksMy42NjIgNC45ODMsMy43MDVjLTEuODI1LDEuNDMxIC00LjEyNSwyLjI4NCAtNi42MjUsMi4yODRjLTAuNDMsMCAtMC44NTUsLTAuMDI1IC0xLjI3MywtMC4wNzVjMi4zNjEsMS41MTMgNS4xNjQsMi4zOTYgOC4xNzcsMi4zOTZjOS44MTIsMCAxNS4xNzYsLTguMTI4IDE1LjE3NiwtMTUuMTc3YzAsLTAuMjMxIC0wLjAwNSwtMC40NjEgLTAuMDE1LC0wLjY5YzEuMDQzLC0wLjc1MyAxLjk0OCwtMS42OTIgMi42NjMsLTIuNzYxeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
