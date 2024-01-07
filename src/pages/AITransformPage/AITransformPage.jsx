import React from "react";
import aiimg from "../../assets/aiimg.png";

function AITransformPage() {
  const [selectedImage, setSelectedImage] = React.useState();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-slate-950 text-white w-screen h-screen pt-[60px] overflow-y-auto z-0">
      <div className="flex flex-col gap-10 justify-center items-center mt-10">
        <div className="flex flex-row gap-[200px] font-semibold text-[25px]">
          <div>Example Input</div>
          <div>Example Output</div>
        </div>
        <img src={aiimg} alt="" className="w-[700px] -mt-[20px]" />
      </div>
      <div className="flex flex-row gap-10 justify-between px-[282px] items-center mt-10 w-full">
        <img src={selectedImage} alt="" className="w-[330px] -mt-[20px]" />
        {/* <img src={} alt="" className="w-[330px] -mt-[20px]" /> here show the result image */}
      </div>
      {!selectedImage ? (
        <div className="w-full flex justify-center items-center text-[40px] font-semibold font-Brush">
          Click here to upload your image
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-10 justify-center items-center mt-5 mb-10">
        {selectedImage ? (
          <button
            onClick={() => {}} // call you ai generator function here
            className="bg-[#573232] p-2 rounded-2xl text-white w-[180px] font-semibold mt-5"
          >
            Transform Image
          </button>
        ) : (
          <input type="file" name="" id="" onChange={handleImageUpload} />
        )}
      </div>
    </div>
  );
}

export default AITransformPage;
