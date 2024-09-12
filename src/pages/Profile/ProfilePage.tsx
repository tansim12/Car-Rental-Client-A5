import { Button, Card, Avatar } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";
import { useGetUserInfoQuery } from "../../Redux/Feature/Public User/user";
import { CgProfile } from "react-icons/cg";
const { Meta } = Card;

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useAppSelector((s) => s?.auth?.user);
  const id = user ? user?.id : null;

  const { data: userData } = useGetUserInfoQuery(id, { skip: !id });
  const handleEditClick = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-page">
      <Card
        className="w-96 p-5 bg-pageBg text-white rounded-lg shadow-xl"
        actions={[
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={handleEditClick}
            className="bg-secondary hover:bg-secondary border-none text-black"
          >
            Edit Profile
          </Button>,
        ]}
      >
        <Meta
          avatar={
            <Avatar
              src={<CgProfile />}
              size={100}
              className="border-4 border-secondary"
            />
          }
          title={<h2 className="text-secondary text-lg ">{userData?.name}</h2>}
          description={<h2 className="text-white ">{userData?.email}</h2>}
        />
        <div className="mt-4 space-y-2">
          <p>
            <strong>Phone:</strong> {userData?.phone}
          </p>
          <p>
            <strong>Role:</strong> {userData?.role}
          </p>
          <p>
            <strong>Status:</strong> {userData?.status}
          </p>
          <p>
            <strong>Member Since:</strong>{" "}
            {new Date(userData?.createdAt as string).toLocaleDateString()}
          </p>
          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(userData?.updatedAt as string).toLocaleDateString()}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
