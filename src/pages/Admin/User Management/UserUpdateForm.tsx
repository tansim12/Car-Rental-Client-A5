import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/From/CustomForm";
import { useUpdateUserInfoMutation } from "../../../Redux/Feature/User And Admin/userAndAdminBoth.api";
import { TUser } from "../../../Types/user.type";
import CustomInput from "../../../components/From/CustomInput";
import CustomSelect from "../../../components/From/CustomSelect";
import ButtonBackgroundShine from "../../../components/ui/Button/ButtonBackgroundShine";
import toast from "react-hot-toast";
import { handleApiError } from "../../../utils/handleApiError";

const UserUpdateForm = ({ userData }: { userData: Partial<TUser> }) => {
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = {
      body: {
        name: data?.name,
        role: data?.role,
        status: data?.status,
        phone: data?.phone,
      },
      id: userData?._id,
    };
    const toastId = toast.loading("Update ...");
    try {
      const res = await updateUserInfo(payload).unwrap();
      if (res?.success) {
        toast.success("Profile Update Done", { id: toastId, duration: 3000 });
      }
    } catch (error) {
      handleApiError(error,toastId);
    }
  };
  return (
    <div>
      <div>
        <CustomForm onSubmit={onSubmit} defaultValues={userData}>
          <div>
            <CustomInput label="Name" name="name" type="text" />
            <CustomInput label="Phone" name="phone" type="number" />
            <CustomSelect
              label="Role"
              name="role"
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
            />
            <CustomSelect
              label="Status"
              name="status"
              options={[
                { label: "Active", value: "active" },
                { label: "Block", value: "block" },
              ]}
            />
          </div>

          <div className="flex justify-center items-center">
            <ButtonBackgroundShine name="Update" />
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default UserUpdateForm;
