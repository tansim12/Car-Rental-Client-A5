import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/ui/SocialLoing/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-pageBg">
      <div className="max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900">
        <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
          <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
            {/* Left side form */}
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white">
              Sign In
            </h2>
            <form>
              <div className="mb-4 flex flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1"
                  placeholder="Username"
                  type="text"
                />
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1"
                  placeholder="Password"
                  type="password"
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
              <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium uppercase  hover:bg-white text-black">
                Submit
              </button>
            </form>
            <p className="mt-6 flex gap-1 text-sm text-white">
              Did you
              <a className="text-sky-500 underline" href="#">
                forget your password?
              </a>
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
