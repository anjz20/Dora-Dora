import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/");
    dispatch(loginUser(false));
  };
  return (
    <div className="shadow-xl text-white bg-[#683D9433] absolute w-full h-[60px] flex justify-between flex-row items-center pl-10 pr-10 z-10">
      <div
        className="text-[30px] font-Brush text-center cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Dora Dora
      </div>
      <div className="flex flex-row gap-4">
        <div className="cursor-pointer" onClick={() => navigate("/home")}>
          Home
        </div>
        <div className="cursor-pointer" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Header;
