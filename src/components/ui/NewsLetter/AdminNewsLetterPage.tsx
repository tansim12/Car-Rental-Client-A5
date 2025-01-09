/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import  { useEffect, useState } from "react";
import { Button, Table, Modal, Checkbox } from "antd";
import { toast } from "react-hot-toast";
import moment from "moment";

import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomReactQuill from "../../From/CustomReactQuill";
import LoadingPage from "../../../pages/Loading/LoadingPage";
import {
  useFindAllNewsLetterEmailQuery,
  useSendMessageNewsLetterEmailMutation,
} from "../../../Redux/Feature/Admin/newsLetter.api";
import CustomForm from "../../From/CustomForm";
import CustomInput from "../../From/CustomInput";

const AdminNewsLetterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const {
    data: newLetterData,
    isLoading: isNewLetterDataPending,
    isError: isNewsLetterDataError,
  } = useFindAllNewsLetterEmailQuery({});

  const [sendMessageNewsLetterEmail] = useSendMessageNewsLetterEmailMutation();

  useEffect(() => {
    if (isNewsLetterDataError) {
      toast.error("Failed to fetch newsletter data.");
    }
  }, [isNewsLetterDataError]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(
        newLetterData?.data?.map((item: any) => item.email) || []
      );
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (email: string, checked: boolean) => {
    setSelectedRows((prev) =>
      checked ? [...prev, email] : prev.filter((rowEmail) => rowEmail !== email)
    );
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (selectedRows.length > 0) {
      const payload = {
        emailArray: selectedRows,
        subject: data.subject,
        message: data.message,
      };
      const res = await sendMessageNewsLetterEmail(payload);
      if (res?.data?.success) {
        setIsModalOpen(false);
        toast.success("Emails sent successfully!");
      } else {
        setIsModalOpen(false);
        toast.error("Emails sent Field!");
      }
    } else {
      toast.error("Please select at least one email.");
    }
  };

  const columns = [
    {
      title: <Checkbox onChange={(e) => handleSelectAll(e.target.checked)} />,
      dataIndex: "email",
      render: (_: any, record: any) => (
        <Checkbox
          checked={selectedRows?.includes(record?.email)}
          onChange={(e) => handleRowSelect(record?.email, e.target.checked)}
        />
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) =>
        moment(date).isValid() ? moment(date).format("LL") : "N/A",
    },
    {
      title: "Updated",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date: string) =>
        moment(date).isValid() ? moment(date).format("LL") : "N/A",
    },
  ];

  return (
    <div>
      {/* Modal Section */}
      <Modal
        title="Send Newsletter"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
      >
        <CustomForm onSubmit={onSubmit}>
          <div className="  ">
            <CustomInput
              name="subject"
              label="Subject"
              type="text"
              isLabelColor={true}
              placeholder={"Subject here"}
            />
            <CustomReactQuill name="message" label="Message" />
          </div>

          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </CustomForm>
      </Modal>

      {/* Action Button */}
      <div className="flex justify-end my-3">
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          disabled={selectedRows.length === 0}
        >
          Send Message
        </Button>
      </div>

      {/* Table Section */}
      {isNewLetterDataPending ? (
        <LoadingPage />
      ) : (
        <Table
          dataSource={newLetterData?.data}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          scroll={{ x: true }}
        />
      )}

      {/* Selected Rows */}
      <div className="mt-4">
        <strong>Selected Emails:</strong> {selectedRows.join(", ")}
      </div>
    </div>
  );
};

export default AdminNewsLetterPage;
