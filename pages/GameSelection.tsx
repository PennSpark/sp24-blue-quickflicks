import React from "react";
import "../app/globals.css";
import { IconAndText } from "../public/IconAndText";
import { Search1 } from "../public/Search";
import { User1 } from "../public/User";

const GameSelection = (): JSX.Element => {
  return (
    <div className="bg-[#1E1E1E] flex flex-row justify-center w-full">
      <div className="bg-[#1E1E1E] w-[390px] h-[790px]">
        <div className="relative w-[10px] h-screen">
          <div className="absolute w-[500px] h-screen top-0 left-0 rounded-[40px] overflow-hidden bg-[url(https://c.animaapp.com/OEQRBkZ3/img/screen.svg)] bg-[100%_100%]">
            <div className="absolute top-[46px] left-[155px] [font-family:'Rosario',Helvetica] font-bold text-variable-collection-lighter-red text-[22px] text-center tracking-[0] leading-[normal]">
              Games
            </div>
            <p className="absolute w-[268px] top-[79px] left-[54px] [font-family:'Rosario',Helvetica] font-bold text-white text-[15px] text-center tracking-[0] leading-[normal]">
              test your film knowledge, <br />
              if you lose, discover more about a film!
            </p>
            <div className="absolute w-[305px] h-[258px] top-[148px] left-[35px] bg-variable-collection-slightly-off-white rounded-[5px]">
              <div className="absolute w-[305px] h-[100px] top-[158px] left-0 bg-[#a60000] rounded-[5px]">
                <p className="absolute w-[304px] top-[17px] left-px [font-family:'Rosario',Helvetica] font-bold text-white text-[12px] text-center tracking-[0] leading-[normal]">
                  swap tiles to make sure each row represents a movie!
                </p>
                <div className="absolute w-[150px] h-[50px] top-[44px] left-[78px] bg-[url(https://c.animaapp.com/OEQRBkZ3/img/rectangle-6.png)] bg-[100%_100%]">
                  <div className="absolute w-[76px] top-[11px] left-[37px] [font-family:'Rosario',Helvetica] font-bold text-[#a60000] text-[15px] text-center tracking-[0] leading-[normal]">
                    Play Now
                  </div>
                </div>
              </div>
              <div className="absolute w-[268px] top-[110px] left-[19px] [font-family:'Rosario',Helvetica] font-bold text-variable-collection-base-red text-[30px] text-center tracking-[0] leading-[normal]">
                Bookends
              </div>
            </div>
            <div className="absolute w-[383px] h-[150px] top-[665px] left-[-4px]">
              <div className="absolute w-[305px] h-[81px] top-0 left-[39px] bg-variable-collection-slightly-off-white rounded-[5px]" />
              <img
                className="absolute w-[95px] h-[85px] top-[26px] left-[150px]"
                alt="Icon puzzle"
                src="https://c.animaapp.com/OEQRBkZ3/img/---icon--puzzle-@2x.png"
              />
              <div className="absolute w-[383px] h-[69px] top-[81px] left-0 bg-collection-1-accent-blue">
                <div className="absolute w-[128px] h-[69px] top-0 left-[128px] bg-[#1e1e1e] shadow-[inset_0px_2px_0px_#aaaaaa]">
                  <IconAndText
                    className="!gap-[2px] !left-[41px] !top-[15px]"
                    icon="top-icon"
                    override={<Search1 className="!relative !w-[24px] !h-[24px]" />}
                    size="medium"
                    text="Discover"
                    textClassName="!text-white !tracking-[0] !text-[12px] !text-center ![font-style:unset] !font-normal ![font-family:'Rosario',Helvetica] !leading-[14px]"
                  />
                </div>
                <div className="absolute w-[128px] h-[69px] top-0 left-0 bg-[#1e1e1e] shadow-[inset_0px_2px_0px_#074ee8]">
                  <div className="relative w-[36px] h-[46px] top-[12px] left-[45px]">
                    <div className="relative w-[38px] h-[43px] left-[-2px]">
                      <img
                        className="absolute w-[36px] h-[32px] top-0 left-0"
                        alt="Home"
                        src="https://c.animaapp.com/OEQRBkZ3/img/home.svg"
                      />
                      <div className="absolute h-[14px] top-[29px] left-[2px] [font-family:'Rosario',Helvetica] font-normal text-[#f77e7e] text-[12px] text-center tracking-[0] leading-[14px] whitespace-nowrap">
                        Games
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-[128px] h-[69px] top-0 left-[255px] bg-[#1e1e1e] shadow-[inset_0px_2px_0px_#aaaaaa]">
                  <IconAndText
                    className="!gap-[2px] !left-[27px] !top-[17px]"
                    icon="top-icon"
                    override={<User1 className="!relative !w-[24px] !h-[24px]" />}
                    size="medium"
                    text="Profile"
                    textClassName="!text-white !tracking-[0] !text-[12px] !text-center ![font-style:unset] !font-normal ![font-family:'Rosario',Helvetica] !leading-[14px]"
                  />
                </div>
              </div>
              <img
                className="absolute w-[124px] h-[2px] top-[81px] left-[4px]"
                alt="Line"
                src="https://c.animaapp.com/OEQRBkZ3/img/line-1.svg"
              />
            </div>
            <div className="absolute w-[137px] h-[169px] top-[457px] left-[32px]">
              <div className="absolute w-[134px] h-[168px] top-0 left-[3px] bg-variable-collection-slightly-off-white rounded-[5px]" />
              <div className="absolute w-[134px] h-[55px] top-[114px] left-[3px] bg-[#a60000] rounded-[5px]" />
              <img
                className="absolute w-[102px] h-[37px] top-[127px] left-[19px]"
                alt="Rectangle"
                src="https://c.animaapp.com/OEQRBkZ3/img/rectangle-13.png"
              />
              <div className="left-[32px] absolute w-[76px] top-[132px] [font-family:'Rosario',Helvetica] font-bold text-[#a60000] text-[12px] text-center tracking-[0] leading-[normal]">
                Play Now
              </div>
              <div className="absolute w-[135px] top-[81px] left-0 [font-family:'Rosario',Helvetica] font-bold text-variable-collection-base-red text-[20px] text-center tracking-[0] leading-[normal]">
                Crossword
              </div>
              <div className="absolute w-[11px] h-[27px] top-[49px] left-[50px] bg-[#a60000]" />
              <div className="absolute w-[11px] h-[16px] top-[46px] left-[78px] bg-[#a60000]" />
            </div>
            <div className="absolute w-[135px] h-[168px] top-[457px] left-[205px]">
              <div className="absolute w-[134px] h-[168px] top-0 left-px bg-variable-collection-slightly-off-white rounded-[5px]" />
              <div className="absolute w-[134px] h-[55px] top-[113px] left-px bg-[#a60000] rounded-[5px]" />
              <img
                className="absolute w-[102px] h-[37px] top-[127px] left-[17px]"
                alt="Rectangle"
                src="https://c.animaapp.com/OEQRBkZ3/img/rectangle-13.png"
              />
              <div className="left-[30px] absolute w-[76px] top-[132px] [font-family:'Rosario',Helvetica] font-bold text-[#a60000] text-[12px] text-center tracking-[0] leading-[normal]">
                Play Now
              </div>
              <div className="absolute w-[135px] top-[81px] left-0 [font-family:'Rosario',Helvetica] font-bold text-variable-collection-base-red text-[20px] text-center tracking-[0] leading-[normal]">
                Frames
              </div>
              <img
                className="absolute w-[58px] h-[62px] top-[20px] left-[39px]"
                alt="Open window"
                src="https://c.animaapp.com/OEQRBkZ3/img/open-window@2x.png"
              />
            </div>
          </div>
          <img
            className="relative w-[0px] h-[86px] top-[168px] left-[142px]"
            alt="Icon grid small"
            src="https://c.animaapp.com/OEQRBkZ3/img/---icon--grid-small-@2x.png"
          />
          <img
            className="absolute w-[46px] h-[47px] top-[487px] left-[79px]"
            alt="Icon table"
            src="https://c.animaapp.com/OEQRBkZ3/img/---icon--table-@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GameSelection;