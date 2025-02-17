/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Modal, Button } from "antd";
import { EditOutlined, LockOutlined } from "@ant-design/icons";
import CustomForm from "../../From/CustomForm";
import CustomInput from "../../From/CustomInput";
import CustomFileUpload from "../../From/CustomFileUpload";
import { useAppSelector } from "../../../Redux/hook";
import { useGetUserInfoQuery } from "../../../Redux/Feature/Public User/user";
import { useUpdateUserInfoMutation } from "../../../Redux/Feature/User And Admin/userAndAdminBoth.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import LoadingPage from "../../../pages/Loading/LoadingPage";
import { uploadImagesToImgBB } from "../../../utils/imgbb";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPasswordSchemaZod } from "../../../Schemas/forgetPasswordSchema";
import { useForgetPasswordMutation } from "../../../Redux/Feature/Auth/authApi";
import { handleApiError } from "../../../utils/handleApiError";

const Profile: React.FC = () => {
  const user = useAppSelector((s) => s?.auth?.user);
  const id = user ? user?.id : null;
  const {
    data: userData,
    isLoading,
    refetch,
  } = useGetUserInfoQuery(id, { skip: !id });
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);

  const [selectImages, setSelectImages] = useState([]);
  // Handle form submission for editing profile
  const handleEditSubmit: SubmitHandler<FieldValues> = async (data) => {
    let image = [];
    if (selectImages?.length > 0) {
      image = await uploadImagesToImgBB(selectImages as any);
    }
    const info = {
      name: data?.name,
      address: data?.address,
      phone: data?.phone,
      image: image?.length > 0 ? image?.[0] : userData?.image,
    };
    const payload = {
      body: info,
      id: userData?._id,
    };
    const res = await updateUserInfo(payload);
    if (res?.data?.success) {
      toast.success("User Profile update successfully done");
      refetch();
    } else {
      toast.error("Something went wrong");
    }
    setIsEditModalOpen(false);
  };

  const [forgetPassword] = useForgetPasswordMutation();

  // Handle password change submission
  const handleChangePasswordSubmit = async (data: any) => {
    if (data?.newPassword !== data?.confirmNewPassword) {
      return toast.error("New Password and Confirm new password not match");
    }
    const toastId = toast.loading("Forget ....");
    const payload = {
      email: userData?.email,
      newPassword: data?.newPassword,
      oldPassword: data?.oldPassword,
    };
    try {
      const res = await forgetPassword(payload).unwrap();
      if (res?.success) {
        toast.success("Forget Password Done", { id: toastId, duration: 3000 });
      }
    } catch (error) {
      handleApiError(error, toastId);
    }
    setIsChangePasswordModalOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-col   p-8 bg-gray-100 min-h-screen">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={userData?.image}
                alt="User"
                className="rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-6 border-2 border-gray-300 object-contain"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-2">
                  {userData?.name} ({userData?.role})
                </h2>
                <p className="text-gray-600">{userData?.email}</p>
                <p className="text-gray-600">Phone: {userData?.phone}</p>
                <p className="text-gray-600">{userData?.address}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col md:flex md:flex-row justify-between gap-4">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => setIsEditModalOpen(true)}
              >
                Edit Profile
              </Button>
              <Button
                type="default"
                icon={<LockOutlined />}
                onClick={() => setIsChangePasswordModalOpen(true)}
              >
                Change Password
              </Button>
              <Button type="default" disabled danger>
                Reset Password
              </Button>
            </div>
          </div>

          {/* Edit Profile Modal */}
          <Modal
            title="Edit Profile"
            open={isEditModalOpen}
            onCancel={() => setIsEditModalOpen(false)}
            footer={null}
          >
            <CustomForm onSubmit={handleEditSubmit} defaultValues={userData}>
              <CustomInput name="name" label="Name" type="string" />
              <CustomInput name="phone" label="Phone" type="string" />
              <CustomInput name="address" label="Address" type="string" />

              {userData?.image && (
                <img
                  src={userData?.image}
                  alt="User"
                  className="rounded-full w-32 object-contain h-32 mb-4 md:mb-0 md:mr-6 border-2 border-gray-300"
                />
              )}
              <div>
                <CustomFileUpload
                  changeOnValue={setSelectImages}
                  name="file"
                  label="Images"
                  type="file"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="default"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit" className="ml-2">
                  Save
                </Button>
              </div>
            </CustomForm>
          </Modal>

          {/* Change Password Modal */}
          <Modal
            title="Change Password"
            open={isChangePasswordModalOpen}
            onCancel={() => setIsChangePasswordModalOpen(false)}
            footer={null}
          >
            <CustomForm
              onSubmit={handleChangePasswordSubmit}
              resolver={zodResolver(forgetPasswordSchemaZod)}
            >
              <div>
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
                <CustomInput
                  name="confirmNewPassword"
                  label="Confirm New Password"
                  type="text"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="default"
                  onClick={() => setIsChangePasswordModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit" className="ml-2">
                  Change Password
                </Button>
              </div>
            </CustomForm>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Profile;
