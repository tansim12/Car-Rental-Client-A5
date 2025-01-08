/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import CustomForm from "../../components/From/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import CustomInput from "../../components/From/CustomInput";
import { useLoginMutation } from "../../Redux/Feature/Auth/authApi";
import verifyToken from "../../utils/verifyToken";
import { useAppDispatch } from "../../Redux/hook";
import { setUser } from "../../Redux/Feature/Auth/authSlice";
import { handleApiError } from "../../utils/handleApiError";
import CustomOutlineButton from "../../components/ui/Button/CustomOutlineButton";
import regAnimation from "../../assets/register (1).json";
import { Button } from "antd";
import { LuArrowLeft } from "react-icons/lu";
const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Register pending...");
    try {
      const res = await login(data).unwrap();
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

  const loginDemo = async (data: any) => {
    const toastId = toast.loading("Register pending...");
    try {
      const res = await login(data).unwrap();
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
      <div className="flex  flex-col md:flex-row md:flex md:justify-center gap-10 items-center min-h-screen bg-[#1b1b1b] text-white ">
        <div className="space-y-6 rounded-lg  p-10 shadow-lg mt-5 w-screen sm:max-w-lg ">
          {/* Left side form */}
          <h2 className="mb-6 text-3xl font-bold tracking-tight light:text-lightText flex items-center gap-3">
            <LuArrowLeft
              onClick={() => navigate("/")}
              className="cursor-pointer"
            />{" "}
            Sign In
          </h2>

          <div>
            <div className="mb-6">
              <h2 className="mb-3 text-blue-500">Login Demo Credential:</h2>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="small"
                  type="dashed"
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() =>
                    loginDemo({
                      email: "u1@gmail.com",
                      password: "password123",
                    })
                  }
                >
                  User Credentials
                </Button>

                <Button
                  size="small"
                  type="dashed"
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() =>
                    loginDemo({
                      email: "a1@gmail.com",
                      password: "password123",
                    })
                  }
                >
                  Admin Credentials
                </Button>
              </div>
            </div>
          </div>

          <CustomForm onSubmit={onSubmit}>
            <div className="  ">
              <CustomInput
                name="email"
                label="Email"
                type="email"
                isLabelColor={true}
                placeholder={"abc@gmail.com"}
              />
              <CustomInput
                name="password"
                label="password"
                type="password"
                isLabelColor={true}
                placeholder={"password"}
              />
            </div>

            <CustomOutlineButton
              name="Login"
              customCss="w-full"
              textColor="black"
              isTransParent={false}
            />
          </CustomForm>
          {/* <p className="mt-6 flex gap-1 text-sm text-white">
            Did you
            <span
              onClick={() => navigate("/forget-password")}
              className="text-sky-500 underline cursor-pointer"
            >
              forget your password?
            </span>
          </p> */}
          <div className="text-center mt-4 ">
            <span>
              <span className="light:text-lightText">
                If you don&apos;t already have an account click the button below
                to create your account.
              </span>{" "}
              <span
                onClick={() => {
                  navigate("/register");
                }}
                className="text-sky-500 underline hover:cursor-pointer"
              >
                ?Register
              </span>{" "}
            </span>
          </div>
        </div>

        {/* Right side content */}
        <div>
          <div>
            <Lottie
              animationData={regAnimation}
              loop={true}
              autoplay={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </>
    // <div className="flex justify-center items-center h-screen w-screen bg-[#1b1b1b]">
    //   <div className="max-w-3xl  p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 ">
    //     <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
    //       <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
    //         {/* Left side form */}
    //         <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white">
    //           Sign In
    //         </h2>
    //         <CustomForm onSubmit={onSubmit}>
    //           <div className="  ">
    //             <CustomInput
    //               name="email"
    //               label="Email"
    //               type="email"
    //               isLabelColor={true}
    //               placeholder={"abc@gmail.com"}
    //             />
    //             <CustomInput
    //               name="password"
    //               label="password"
    //               type="password"
    //               isLabelColor={true}
    //               placeholder={"password"}
    //             />
    //           </div>

    //           <CustomOutlineButton
    //             name="Login"
    //             customCss="w-full"
    //             textColor="black"
    //             isTransParent={false}
    //           />
    //         </CustomForm>
    //         <p className="mt-6 flex gap-1 text-sm text-white">
    //           Did you
    //           <span
    //             onClick={() => navigate("/forget-password")}
    //             className="text-sky-500 underline cursor-pointer"
    //           >
    //             forget your password?
    //           </span>
    //         </p>
    //       </div>
    //       {/* Right side content */}
    //       <div className="w-full sm:w-1/2">
    //         <p className="mb-6 text-sm text-white">
    //           If you don&apos;t already have an account click the button below
    //           to create your account.
    //         </p>
    //         <button
    //           onClick={() => {
    //             navigate("/register");
    //           }}
    //           className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700"
    //         >
    //           Create Account
    //         </button>
    //         <p className="my-4 text-center text-white">OR</p>
    //         {/* Right side content */}
    //         <div>
    //           <div>
    //             <Lottie
    //               animationData={regAnimation}
    //               loop={true}
    //               autoplay={true}
    //             ></Lottie>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
