import React from "react";
import herosec from "../../assets/herosec.png";
import magicavatar from "../../assets/magicavatar.png";
import agephoto from "../../assets/agephoto.png";
import aipic from "../../assets/aipic.png";
import editanywhere from "../../assets/editanywhere.png";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 text-white w-screen h-screen pt-[60px] overflow-y-auto z-0">
      <div className="flex flex-col gap-10">
        <div>
          <img src={herosec} alt="" />
        </div>
        <div className="flex flex-row justify-between gap-10  items-center">
          <div>
            <img src={magicavatar} alt="" className="scale-75" />
          </div>
          <div className="flex flex-col gap-5 justify-start items-start">
            <div className="font-semibold text-[40px]">Magic Avatar</div>
            <div className="w-[70%]">
              Create Personalized Impressive avatars with the help of powerful
              AI technology
            </div>
            <button
              onClick={() => navigate("/ai-transform")}
              className="bg-[#573232] p-2 rounded-2xl text-white w-[150px] font-semibold"
            >
              Click here!
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between gap-10  items-center">
          <div>
            <img src={agephoto} alt="" className="scale-75" />
          </div>
          <div className="flex flex-col gap-5 justify-start items-start pl-20">
            <div className="font-semibold text-[40px]">Age Photo Generator</div>
            <div className="w-[70%]">
              Visualize Your Aging Journey with Age Progression AI From 0, 10,
              20, 30 to 100 in Stunning Detail
            </div>
            <button
              onClick={() => navigate("/ai-transform")}
              className="bg-[#573232] p-2 rounded-2xl text-white w-[150px] font-semibold"
            >
              Click here!
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-10  items-center">
          <div>
            <img src={aipic} alt="" className="scale-75" />
          </div>
          <div className="flex flex-col gap-5 justify-start items-start">
            <div className="font-semibold text-[40px]">
              AI Picture Colorizer
            </div>
            <div className="w-[70%]">
              AI-Powered Picture Colorizer Transforms Black & White Memories
              into Vibrant Masterpieces
            </div>
            <button
              onClick={() => navigate("/ai-transform")}
              className="bg-[#573232] p-2 rounded-2xl text-white w-[150px] font-semibold"
            >
              Click here!
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center pb-10 pt-10 text-white">
          <img src={editanywhere} alt="" className="w-[400px]" />
          <div className="font-semibold text-[40px] mt-5">
            Edit from anywhere!
          </div>
          <div className="w-[30%] text-center">
            Pick up where you left off with Dora Dora on desktop, or web your
            projects will sync automatically.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
