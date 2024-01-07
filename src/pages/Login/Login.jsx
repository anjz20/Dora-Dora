import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./styles.css";
import text from "../../assets/text.png";
import laptop from "../../assets/laptop.png";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const watchAllFields = watch();
  const passwordValue = watchAllFields.password;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function onSubmit(data) {
    if (!isChecked) {
      alert("Please agree to the terms and conditions");
      return;
    }
    console.log(data);
    dispatch(loginUser());
    navigate("/home");
  }

  return (
    <div className="bg-slate-950 text-white h-screen w-full flex flex-row justify-between p-5 scale-90">
      <div className="bg-white text-black shadow-2xl rounded-3xl w-[70%] flex flex-col">
        <div className="text-[64px] font-Brush text-center">Dora Dora</div>
        <div className="pl-10 font-bold">Create Your Account</div>
        <div className="flex flex-row mt-3">
          <div className="flex flex-col pl-10">
            <TextField
              id="standard-basic"
              label="First name"
              variant="standard"
              name="firstName"
              {...register("firstName", { required: "First name is required" })}
            />
            {formState.errors.firstName && (
              <p className="text-red-600 text-[12px]">
                {formState.errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col pl-10">
            <TextField
              id="standard-basic"
              label="Last name"
              variant="standard"
              name="lastName"
              {...register("lastName", { required: "Last name is required" })}
            />
            {formState.errors.lastName && (
              <p className="text-red-600 text-[12px]">
                {formState.errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <div className="flex flex-col pl-10">
            <TextField
              id="standard-basic"
              label="Phone"
              variant="standard"
              name="phone"
              {...register("phone", { required: "Phone name is required" })}
            />
            {formState.errors.phone && (
              <p className="text-red-600 text-[12px]">
                {formState.errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex flex-col pl-10">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              {...register("email", { required: "Email name is required" })}
            />
            {formState.errors.email && (
              <p className="text-red-600 text-[12px]">
                {formState.errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-row items-center mt-5">
          <div className="flex flex-col pl-10">
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {formState.errors.password && (
                <p className="text-red-600 text-[12px]">
                  {formState.errors.password.message}
                </p>
              )}
            </FormControl>
          </div>
          <div className="flex flex-col pl-10 pr-10">
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === passwordValue || "The passwords do not match",
                })}
              />
              {formState.errors.confirmPassword && (
                <p className="text-red-600">
                  {formState.errors.confirmPassword.message}
                </p>
              )}
            </FormControl>
          </div>
        </div>
        <div className="mt-5 w-[100%] text-[12px] flex justify-start ml-10">
          <div>
            {" "}
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-2"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          </div>
          <div>
            {" "}
            I have read and agreed to the
            <span className="text-red-700 ml-1 font-semibold cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-red-700 ml-1 font-semibold cursor-pointer">
              Privacy policy.
            </span>
          </div>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="animated w-[430px] h-[40px] text-center flex justify-center items-center ml-10 mt-3"
        >
          Sign up
        </button>
        <div className="font-semibold w-[100%] mt-1 text-center text-[14px]">
         Already have an account?{" "}
          <span className="text-red-700 cursor-pointer">Sign in</span>
        </div>
      </div>
      <div className=" w-full text-center flex flex-col gap-5 justify-center items-center">
        <div>
          <img src={text} alt="" className="w-[400px]" />
        </div>
        <div>
          <img src={laptop} alt="" className="w-[700px]" />
        </div>
      </div>
    </div>
  );
}

export default Login;
