import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/ui/SocialLoing/SocialLogin";
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

const defaultValue = { email: "u4@gmail.com", password: "password123" };

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
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-pageBg">
      <div className="max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900">
        <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
          <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
            {/* Left side form */}
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white">
              Sign In
            </h2>
            <CustomForm onSubmit={onSubmit} defaultValues={defaultValue}>
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
              <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                <input type="checkbox" id="keep_signed_in" />
                <label
                  className="select-none text-sm font-medium text-white"
                  htmlFor="keep_signed_in"
                >
                  Keep me signed in
                </label>
              </div>
             
              <CustomOutlineButton name="Login" customCss="w-full"  textColor="black" isTransParent={false} />
            </CustomForm>
            <p className="mt-6 flex gap-1 text-sm text-white">
              Did you
              <span onClick={()=>navigate("/forget-password")} className="text-sky-500 underline cursor-pointer" >
                forget your password?
              </span>
            </p>
          </div>
          {/* Right side content */}
          <div className="w-full sm:w-1/2">
            <p className="mb-6 text-sm text-white">
              If you don&apos;t already have an account click the button below
              to create your account.
            </p>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700"
            >
              Create Account
            </button>
            <p className="my-4 text-center text-white">OR</p>
            <div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
