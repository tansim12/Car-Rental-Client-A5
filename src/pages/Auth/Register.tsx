/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../components/From/CustomForm";
import CustomInput from "../../components/From/CustomInput";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../Schemas/authSchema";
import toast from "react-hot-toast";
import { useRegisterMutation } from "../../Redux/Feature/Auth/authApi";
import { useAppDispatch } from "../../Redux/hook";
import { setUser } from "../../Redux/Feature/Auth/authSlice";
import verifyToken from "../../utils/verifyToken";
import { handleApiError } from "../../utils/handleApiError";
import CustomOutlineButton from "../../components/ui/Button/CustomOutlineButton";
import Lottie from "lottie-react";
import regAnimation from "../../assets/register (1).json";
import { LuArrowLeft } from "react-icons/lu";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    if (data?.password !== data?.confirmPassword) {
      return toast.error("Password are not same");
    }
    const { confirmPassword, ...payload } = data;
    const toastId = toast.loading("Register pending...");
    try {
      const res = await register(payload).unwrap();
      if (res.success) {
        const userData = verifyToken(res?.data?.accessToken);
        dispatch(
          setUser({ user: userData?.data, token: res?.data?.accessToken })
        );
        navigate(`/`);
        toast.success("Login Successfully done", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      handleApiError(error, toastId);
    }
  };
  return (
    <>
      <div className="flex  flex-col-reverse md:flex-row md:flex md:justify-center gap-4 items-center min-h-screen light:text-lightText bg-pageBg text-white">
        <div>
          <Lottie
            animationData={regAnimation}
            loop={true}
            autoplay={true}
          ></Lottie>
        </div>

        <div className=" space-y-6 rounded-lg  p-10 shadow-lg mt-5 w-screen sm:max-w-lg">
          <div className="flex flex-col space-y-1">
            <h3 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <LuArrowLeft
                onClick={() => navigate("/login")}
                className="cursor-pointer"
              />{" "}
              Register
            </h3>
            <p className="text-sm light:text-lightText">
              Please fill in the form to create an account.
            </p>
          </div>
          <div>
            <CustomForm
              onSubmit={onSubmit}
              resolver={zodResolver(registerSchema)}
            >
              <div>
                <CustomInput
                  name="name"
                  label="Name"
                  type="text"
                  isLabelColor={true}
                />
              </div>
              <div>
                <CustomInput
                  name="email"
                  label="Email"
                  type="email"
                  isLabelColor={true}
                  placeholder={"abc@gmail.com"}
                />
              </div>
              <div>
                <CustomInput
                  name="phone"
                  label="Phone"
                  type="string"
                  isLabelColor={true}
                  placeholder={"Enter your phone number"}
                />
              </div>
              {/* password  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <CustomInput
                    name="password"
                    label="password"
                    type="password"
                    isLabelColor={true}
                    placeholder={"password"}
                  />
                </div>
                <div>
                  <CustomInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    isLabelColor={true}
                    placeholder={"password"}
                  />
                </div>
              </div>
              <CustomOutlineButton
                name="Sign up"
                customCss="w-full"
                textColor="black"
                isTransParent={false}
              />
            </CustomForm>
            <div className="text-center mt-4 ">
              <span>
                <span className="light:text-lightText">
                  Already have an account
                </span>{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="text-sky-500 underline hover:cursor-pointer"
                >
                  ?Signin
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="flex justify-center items-center min-h-screen   bg-pageBg">
    //   <div className=" space-y-6 rounded-lg dark:bg-zinc-900 p-10 shadow-lg mt-5 w-screen sm:max-w-lg">
    //     <div className="flex flex-col space-y-1">
    //       <h3 className="text-3xl font-bold tracking-tight text-white">
    //         Sign Up
    //       </h3>
    //       <p className="text-sm text-zinc-500 dark:text-zinc-400">
    //         Please fill in the form to create an account.
    //       </p>
    //     </div>
    //     <div>
    //       <CustomForm
    //         onSubmit={onSubmit}
    //         resolver={zodResolver(registerSchema)}
    //       >
    //         <div>
    //           <CustomInput
    //             name="name"
    //             label="Name"
    //             type="text"
    //             isLabelColor={true}
    //           />
    //         </div>
    //         <div>
    //           <CustomInput
    //             name="email"
    //             label="Email"
    //             type="email"
    //             isLabelColor={true}
    //             placeholder={"abc@gmail.com"}
    //           />
    //         </div>
    //         <div>
    //           <CustomInput
    //             name="phone"
    //             label="Phone"
    //             type="string"
    //             isLabelColor={true}
    //             placeholder={"Enter your phone number"}
    //           />
    //         </div>
    //         {/* password  */}
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    //           <div>
    //             <CustomInput
    //               name="password"
    //               label="password"
    //               type="password"
    //               isLabelColor={true}
    //               placeholder={"password"}
    //             />
    //           </div>
    //           <div>
    //             <CustomInput
    //               name="confirmPassword"
    //               label="Confirm Password"
    //               type="password"
    //               isLabelColor={true}
    //               placeholder={"password"}
    //             />
    //           </div>
    //         </div>
    //         <CustomOutlineButton
    //           name="Sign up"
    //           customCss="w-full"
    //           textColor="black"
    //           isTransParent={false}
    //         />
    //       </CustomForm>
    //       <div className="text-center mt-4 ">
    //         <span>
    //           <span className="text-white">Already have an account</span>{" "}
    //           <span
    //             onClick={() => {
    //               navigate("/login");
    //             }}
    //             className="text-sky-500 underline hover:cursor-pointer"
    //           >
    //             ?Signin
    //           </span>{" "}
    //         </span>
    //       </div>

    //       {/* social login  */}
    //       <div className="mt-5">
    //         <SocialLogin />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;
