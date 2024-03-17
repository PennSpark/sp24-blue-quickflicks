import React from "react";
import "../app/globals.css";

const Login = (): JSX.Element => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1E1E1E]">
      <div className="relative w-[155px] h-[56px]">
        <img
          className="w-[150px] h-[50px] left-px absolute top-0"
          alt="Rectangle"
          src="https://c.animaapp.com/VcNKCD5v/img/rectangle-3.png"
        />
        <div className="relative top-[8px] left-auto [font-family:'Rosario',Helvetica] font-medium text-variable-collection-base-red text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          login
        </div>
        <p className="absolute w-[155px] top-[44px] left-0 [font-family:'Rosario',Helvetica] font-normal text-transparent text-[10px] text-center tracking-[0] leading-[normal]">
          <span className="font-bold text-white">forgot password? click </span>
          <span className="font-bold italic text-[#f77e7e]">here</span>
        </p>
      </div>
      <div className="relative w-[142px] h-[55px]">
        <div className="w-[142px] h-[42px] left-0 bg-white rounded-[40px] border border-solid shadow-[0px_4px_4px_#00000040] absolute top-0" />
        <div className="absolute top-[7px] left-[41px] [font-family:'Rosario',Helvetica] font-medium text-[#a60000] text-[20px] text-center tracking-[0] leading-[normal]">
          sign-up
        </div>
      </div>
      <div className="absolute w-[42px] h-[42px] top-[591px] left-[575px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
        <img
          className="absolute w-[27px] h-[18px] top-[11px] left-[7px]"
          alt="Vector"
          src="https://c.animaapp.com/VcNKCD5v/img/vector-1.svg"
        />
      </div>
      <div className="absolute w-[42px] h-[42px] top-[591px] left-[698px] bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]">
        <img
          className="absolute w-[11px] h-[24px] top-[9px] left-[14px]"
          alt="Vector"
          src="https://c.animaapp.com/VcNKCD5v/img/vector.svg"
        />
      </div>
      <div className="absolute w-[42px] h-[44px] top-[589px] left-[812px]">
        <div className="absolute w-[42px] h-[42px] top-[2px] left-0 bg-[#a60000] rounded-[21px] shadow-[0px_4px_4px_#00000040]" />
        <div className="absolute w-[29px] top-1.5 left-[7px] [font-family:'Rounded_Mplus_1c-ExtraBold',Helvetica] font-extrabold text-variable-collection-lighter-red text-[30px] text-center tracking-[0] leading-[normal]">
          X
        </div>
      </div>
      <img
        className="absolute w-[318px] h-[219px] top-[75px] left-[570px] object-cover"
        alt="Screen shot"
        src="https://c.animaapp.com/VcNKCD5v/img/screen-shot-2023-12-02-at-9-44-1@2x.png"
      />
    </div>
  );
};

export default Login;
