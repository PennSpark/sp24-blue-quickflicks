import React from "react";
import "../app/globals.css";
import { TrailingIcon } from "../public/TrailingIcon";

const CreateProfile = (): JSX.Element => {
  return (
    <div className="bg-[#1E1E1E] flex flex-row justify-center w-full">
      <div className="w-[407px] h-[844px]">
        <div className="relative w-[403px] h-[840px] top-[2px] left-[2px]">
          <div className="relative w-[0px] h-[0px] overflow-hidden ">
            <div className="absolute w-[269px] top-[87px] left-[39px] [text-shadow:0px_4px_4px_#a600008f] [font-family:'Rosario',Helvetica] font-bold text-[#f77e7e] text-[25px] tracking-[0] leading-[20px]">
              Create Your Profile
            </div>
            <div className="absolute w-[154px] h-[35px] top-[300px] left-[29px] bg-[#fff6e8] rounded-[10px] border-[3px] border-solid border-[#a60000] shadow-[0px_4px_4px_#00000040]" />
            <div className="absolute w-[291px] h-[35px] top-[366px] left-[29px] bg-[#fff6e8] rounded-[10px] border-[3px] border-solid border-[#a60000] shadow-[0px_4px_4px_#00000040]" />
          </div>
          <img
            className="absolute w-[121px] h-[46px] top-[302px] left-[215px]"
            alt="Vector"
            src="https://c.animaapp.com/qXH7YsMy/img/vector@2x.png"
          />
          <div className="absolute w-[137px] h-[35px] top-[171px] left-[43px] bg-variable-collection-slightly-off-white rounded-[10px] border-[3px] border-solid border-variable-collection-base-red shadow-[0px_4px_4px_#00000040]" />
          <div className="absolute w-[139px] h-[35px] top-[240px] left-[43px]">
            <div className="relative w-[137px] h-[35px] bg-variable-collection-slightly-off-white rounded-[10px] border-[3px] border-solid border-variable-collection-base-red shadow-[0px_4px_4px_#00000040]">
              <div className="absolute w-[9px] top-[7px] left-[8px] [font-family:'Rounded_Mplus_1c-ExtraBold',Helvetica] font-extrabold text-[#a60000] text-[10px] tracking-[0] leading-[normal]">
                @
              </div>
            </div>
          </div>
          <img
            className="absolute w-[145px] h-[43px] top-[170px] left-[193px]"
            alt="Rectangle"
            src="https://c.animaapp.com/qXH7YsMy/img/rectangle-4.svg"
          />
          <img
            className="absolute w-[145px] h-[43px] top-[240px] left-[194px]"
            alt="Rectangle"
            src="https://c.animaapp.com/qXH7YsMy/img/rectangle-7.svg"
          />
          <img
            className="absolute w-[299px] h-[43px] top-[465px] left-[39px]"
            alt="Rectangle"
            src="https://c.animaapp.com/qXH7YsMy/img/rectangle-8.svg"
          />
          <div className="absolute w-[291px] h-[35px] top-[539px] left-[43px] bg-variable-collection-slightly-off-white rounded-[10px] border-[3px] border-solid border-variable-collection-base-red shadow-[0px_4px_4px_#00000040]" />
          <button className="all-[unset] box-border absolute w-[81px] h-[40px] top-[722px] left-[280px] bg-variable-collection-base-red rounded-[10px] overflow-hidden shadow-[4px_4px_4px_#00000040]">
            <div className="relative w-[51px] h-[20px] top-[9px] left-[18px]">
              <div className="absolute h-[18px] top-0 left-0 [font-family:'Rounded_Mplus_1c-Medium',Helvetica] font-medium text-surface text-[16px] tracking-[0] leading-[18px] whitespace-nowrap">
                next
              </div>
              <TrailingIcon className="!absolute !w-[18px] !h-[18px] !top-[2px] !left-[33px]" />
            </div>
          </button>
          <div className="left-[46px] absolute w-[65px] top-[149px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Name (First)
          </div>
          <div className="left-[201px] absolute w-[65px] top-[149px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Name (Last)
          </div>
          <div className="absolute w-[133px] top-[223px] left-[201px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Display Name (Optional)
          </div>
          <div className="absolute w-[76px] top-[284px] left-[46px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Phone Number
          </div>
          <div className="absolute w-[76px] top-[348px] left-[47px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Email Address
          </div>
          <div className="absolute w-[76px] top-[284px] left-[222px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Country
          </div>
          <div className="absolute w-[65px] top-[223px] left-[46px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Username
          </div>
          <p className="absolute w-[282px] top-[431px] left-[47px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Password (make sure to include at least one uppercase character and three numbers) :
          </p>
          <div className="absolute w-[282px] top-[517px] left-[47px] [font-family:'Rosario',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
            Re-type password to confirm:
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;