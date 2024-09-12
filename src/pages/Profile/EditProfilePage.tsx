import React, { useEffect, useState } from "react";
import { Button, Input, Form, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useUpdateUserInfoMutation } from "../../Redux/Feature/User And Admin/userAndAdminBoth.api";
import { TUser } from "../../Types/user.type";
import { useAppSelector } from "../../Redux/hook";
import { useGetUserInfoQuery } from "../../Redux/Feature/Public User/user";
import { handleApiError } from "../../utils/handleApiError";
import toast from "react-hot-toast";

const EditProfilePage = () => {
  const user = useAppSelector((s) => s?.auth?.user);
  const id = user ? user?.id : null;

  const { data: userData, isLoading } = useGetUserInfoQuery(id, { skip: !id });
  const [formData, setFormData] = useState<Partial<TUser> | null>(null);

  const [updateUserInfo] = useUpdateUserInfoMutation();
  const navigate = useNavigate();

  // Initialize form data when userData is available
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData?.name,
        email: userData?.email,
        phone: userData?.phone,
      });
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (formData && id) {
      const payload = {
        body: {
          name: formData?.name,
        },
        id,

      };
      
      try {
        const toastId = toast.loading("Update ...");
        const res = await updateUserInfo(payload).unwrap();
        if (res?.success) {
          toast.success("Profile Update Done", { id: toastId, duration: 3000 });
          navigate("/profile");
        }
      } catch (error) {
        handleApiError(error);
      }
    }
  };

  if (isLoading || !formData) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Card className="w-96 p-5 bg-pageBg text-white rounded-lg shadow-xl">
        <h2 className="text-secondary text-center mb-5">Edit Profile</h2>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Name">
            <Input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-black font-semibold"
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              type="email"
              name="email"
              value={formData.email || ""}
              readOnly
              className="bg-gray-700 border-gray-600 text-black font-semibold"
            />
          </Form.Item>
          <Form.Item label="Phone">
            <Input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              readOnly
              className="bg-gray-700 border-gray-600 text-black font-semibold"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-secondary hover:bg-secondary text-black border-none w-full"
            >
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EditProfilePage;
