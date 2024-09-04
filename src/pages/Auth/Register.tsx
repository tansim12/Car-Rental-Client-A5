import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../components/From/CustomForm";
import CustomInput from "../../components/From/CustomInput";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/ui/SocialLoing/SocialLogin";
import ButtonBackgroundShine from "../../components/ui/Button/ButtonBackgroundShine";

const Register = () => {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen   bg-pageBg">
      <div className=" space-y-6 rounded-lg dark:bg-zinc-900 p-10 shadow-lg mt-5 w-screen sm:max-w-lg">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl font-bold tracking-tight text-white">
            Sign Up
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Please fill in the form to create an account.
          </p>
        </div>
        <div>
          <CustomForm onSubmit={onSubmit}>
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
                type="number"
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

            {/* <button className="rounded-md hover:bg-white bg-primary text-black hover:transition-all px-4 py-2  transition-color">
              Submit
            </button> */}
            <ButtonBackgroundShine name="Submit" width="full"/>
          
          </CustomForm>
          <div className="text-center mt-4 ">
            <span>
              <span className="text-white">Already have an account</span>{" "}
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

          {/* social login  */}
          <div className="mt-5">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
