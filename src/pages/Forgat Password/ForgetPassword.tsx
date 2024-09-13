import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../components/From/CustomForm";
import CustomInput from "../../components/From/CustomInput";
import { useForgetPasswordMutation } from "../../Redux/Feature/Auth/authApi";
import { handleApiError } from "../../utils/handleApiError";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ButtonBackgroundShine from "../../components/ui/Button/ButtonBackgroundShine";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPasswordSchemaZod } from "../../Schemas/forgetPasswordSchema";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [forgetPassword] = useForgetPasswordMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Forget ....");
    try {
      const res = await forgetPassword(data).unwrap();
      if (res?.success) {
        navigate("/login");
        toast.success("Forget Password Done", { id: toastId, duration: 3000 });
      }
    } catch (error) {
      handleApiError(error, toastId);
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-screen  ">
      <div className="border-2 border-black p-5 min-w-96">
        <CustomForm
          onSubmit={onSubmit}
          resolver={zodResolver(forgetPasswordSchemaZod)}
        >
          <div className="text-xl font-bold text-center my-10">
            Forget Password
          </div>
          <div>
            <CustomInput name="email" label="Email" type="text" />
            <CustomInput
              name="oldPassword"
              label="Old Password"
              type="text"
            />
            <CustomInput
              name="newPassword"
              label="New Password"
              type="text"
            />
          </div>
          <ButtonBackgroundShine name="Forget" />
        </CustomForm>
      </div>
    </div>
  );
};

export default ForgetPassword;
