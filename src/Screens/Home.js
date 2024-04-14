/** @format */

function Home() {
	return (
		<div className='bg-white flex flex-row justify-center w-full'>
			<div className='bg-white w-[390px] h-[844px]'>
				<div className='relative w-[375px] h-[812px] top-[16px] left-[7px] rounded-[40px]'>
					<div className='absolute w-[375px] h-[812px] top-0 left-0 rounded-[40px] overflow-hidden bg-[100%_100%]'>
						<div className="absolute top-[46px] left-[155px] [font-family:'Rosario-Bold',Helvetica] font-bold text-variable-collection-lighter-red text-[22px] text-center tracking-[0] leading-[normal]">
							Games
						</div>
						<p className="absolute w-[268px] top-[79px] left-[54px] [font-family:'Rosario-Bold',Helvetica] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]">
							Test your film knowledge, <br />
							If you lose, discover more about a film!
						</p>
						<div className='absolute w-[305px] h-[258px] top-[148px] left-[35px] bg-variable-collection-slightly-off-white rounded-[5px]'>
							<div className='absolute w-[305px] h-[100px] top-[158px] left-0 bg-[#a60000] rounded-[5px]'>
								<p className="absolute w-[304px] top-[17px] left-px [font-family:'Rosario-Bold',Helvetica] font-bold text-white text-[16px] text-center tracking-[0] leading-[normal]">
									Click tiles to create movie groupings!
								</p>
								<div className='absolute w-[150px] h-[50px] top-[44px] left-[78px] bg-[100%_100%]'>
									<div className="absolute w-[76px] top-[11px] left-[37px] [font-family:'Rosario-Bold',Helvetica] font-bold text-[#a60000] text-[15px] text-center tracking-[0] leading-[normal]">
										Play Now
									</div>
								</div>
							</div>
							<div className="absolute w-[268px] top-[110px] left-[19px] [font-family:'Rosario-Bold',Helvetica] font-bold text-variable-collection-base-red text-[30px] text-center tracking-[0] leading-[normal]">
								Bookends
							</div>
						</div>
						<div className='absolute w-[383px] h-[150px] top-[665px] left-[-4px]'>
							<div className='absolute w-[305px] h-[81px] top-0 left-[39px] bg-variable-collection-slightly-off-white rounded-[5px]' />
							<img
								className='absolute w-[95px] h-[85px] top-[26px] left-[150px]'
								alt='Icon puzzle'
								src='icon-puzzle.png'
							/>
							<div className='absolute w-[383px] h-[69px] top-[81px] left-0 bg-collection-1-accent-blue'>
								<div className='absolute w-[128px] h-[69px] top-0 left-[128px] bg-[#1e1e1e] shadow-[inset_0px_2px_0px_#aaaaaa]'>
									{/* <IconAndText
										className='!gap-[2px] !left-[41px] !top-[15px]'
										icon='top-icon'
										override={
											<Search
												className='!relative !w-[24px] !h-[24px]'
												color='white'
											/>
										}
										size='medium'
										text='Discover'
										textClassName="!text-white !tracking-[0] !text-[12px] !text-center ![font-style:unset] !font-normal ![font-family:'Rosario-Regular',Helvetica] !leading-[14px]"
									/> */}
								</div>
								<div className='absolute w-[128px] h-[69px] top-0 left-0 bg-[#1e1e1e] shadow-[inset_0px_2px_0px_#074ee8]'>
									<div className='relative w-[36px] h-[46px] top-[12px] left-[45px]'>
										<div className='relative w-[38px] h-[43px] left-[-2px]'>
											<img
												className='absolute w-[36px] h-[32px] top-0 left-0'
												alt='Home'
												src='home.svg'
											/>
											<div className="absolute h-[14px] top-[29px] left-[2px] [font-family:'Rosario-Regular',Helvetica] font-normal text-[#f77e7e] text-[12px] text-center tracking-[0] leading-[14px] whitespace-nowrap">
												Games
											</div>
										</div>
									</div>
								</div>
								<div className='absolute w-[128px] h-[69px] top-0 left-[255px] bg-[#1e1e1e] shadow-[inset_0px_2px_0px_#aaaaaa]'>
									{/* <IconAndText
										className='!gap-[2px] !left-[27px] !top-[17px]'
										icon='top-icon'
										override={
											<User
												className='!relative !w-[24px] !h-[24px]'
												color='white'
											/>
										}
										size='medium'
										text='Profile'
										textClassName="!text-white !tracking-[0] !text-[12px] !text-center ![font-style:unset] !font-normal ![font-family:'Rosario-Regular',Helvetica] !leading-[14px]"
									/> */}
								</div>
							</div>
							<img
								className='absolute w-[124px] h-[2px] top-[81px] left-[4px]'
								alt='Line'
								src='line-1.svg'
							/>
						</div>
					</div>
					<img
						className='absolute w-[92px] h-[86px] top-[168px] left-[142px]'
						alt='Icon grid small'
						src='icon-grid-small.png'
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
