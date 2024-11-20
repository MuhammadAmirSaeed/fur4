import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import fb from '../../Assets/fb-login.svg'
import google from '../../Assets/Google.svg'


const validationSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  dob: z
    .string()
    .min(1, "Date of birth is required")
    .refine((value) => !isNaN(Date.parse(value)), "Invalid date"),
  country: z.string().min(1, "Please select your country"),
  pet: z.string().optional(),
  pet2: z.string().optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password must be at least 6 characters")
})
.refine((data) => data.password === data.confirmPassword,{
    message:'Passwords do not match',
    path:['confirmPassword']
})

const countires = ["USA", "Canada", "India", "UK"];
const pets = ["Dog", "Cat"];

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema) });

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    console.log("Form Submitted:", data);
    toast.warn('This is in development mode')
    toast.success('Form submitted successfully')
    reset();
  };
  return (
    <>
    <ToastContainer />
      <div className="container flex flex-col justify-center items-center lg:px-[300px]">
        <div>
          <h1 className="font-din  text-[70px] font-bold  text-[#242424] text-nowrap">
            Сreate Your Account
          </h1>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/*  This is First section */}

          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                {...register("firstName")}
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-md focus"
              />
              {errors.firstName && (
                <span className="text-red-400 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("lastName")}
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-md focus"
              />
              {errors.lastName && (
                <span className="text-red-400 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="date"
                {...register("dob")}
                className="w-full p-2 border border-gray-300 rounded-md focus"
              />
              {errors.dob && (
                <span className="text-red-400 text-sm">
                  {errors.dob.message}
                </span>
              )}
            </div>
          </div>

          {/* second section */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <select
                {...register("country")}
                className="w-full p-2 border border-gray-300 rounded-md focus"
              >
                <option value="" className="text-[#050C1291]">
                  Country/ Region
                </option>
                {countires.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <span className="text-red-400 text-sm">
                  {errors.country.message}
                </span>
              )}
            </div>
            <div>
              <select
                {...register("pet")}
                className="w-full border p-2 border-gray-300 rounded-md focus"
              >
                <option value="">Your pet (optional)</option>
                {pets.map((pet) => (
                  <option key={pet} value={pet}>
                    {pet}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                {...register("pet")}
                className="w-full border p-2 border-gray-300 rounded-md focus"
              >
                <option value="">Your pet 2 (optional)</option>
                {pets.map((pet) => (
                  <option key={pet} value={pet}>
                    {pet}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* show line  */}
          <div className=" py-8 flex justify-center items-center">
            <div className="border border-t-1  max-w-[570px] w-full border-[#5F5F5F21]"></div>
          </div>

          {/* password and conform password section */}

          <div className=" grid grid-cols-3 gap-4">
            <div>
              <input
                type="email"
                {...register("email")}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-400 text-sm">
                  {" "}
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register("password")}
                className="w-full border p-2 border-gray-300 rounded-md focus"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-400 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                {...register("confirmPassword")}
                className="w-full border p-2 border-gray-300 rounded-md focus"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <span className="text-red-400 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>

          {/*  Submit Button */}
          <div className=" flex justify-center items-center py-[50px]">
          <button
            type="submit"
            className=" bg-[#00AEEF] text-white px-10 py-3 rounded-md hover:bg-700"
          >
            Continue
          </button>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2">
            <p className="text-[#242424] text-sm">
            Create account with:
            </p>
              <div className=" flex gap-4">
                <div className=" cursor-pointer">
                <img src={google} alt="google" />

                </div>
                     <div className=" cursor-pointer">
                <img src={fb} alt="Facebook" />

                     </div>
              </div>
          </div>
          <div className=" flex justify-center items-center py-[50px]">
            <p>
            Need some help? <span className="text-[#00AEEF] cursor-pointer"> Chat now </span> or <span className="text-[#00AEEF] cursor-pointer">
            call </span> 
            </p>
          </div>

        
        </form>
      </div>
    </>
  );
};

export default SignUp;
