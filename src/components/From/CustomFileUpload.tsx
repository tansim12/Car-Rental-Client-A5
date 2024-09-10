/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TFileUploadProps = {
  name: string;
  label?: string;
  type?: string;
  changeOnValue: any;
};

const CustomFileUpload = ({
  name,
  label,
  type,
  changeOnValue,
}: TFileUploadProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });

  const [fileList, setFileList] = useState<File[]>([]);

  // Update fileList state when inputValue changes
  useEffect(() => {
    if (inputValue) {
      setFileList(Array.from(inputValue));
    }
    changeOnValue(inputValue);
  }, [inputValue]);

  // Handle file removal by creating a new FileList
  const handleRemove = (index: number) => {
    const updatedFileList = fileList.filter((_, i) => i !== index);
    setFileList(updatedFileList);

    // Create a new FileList
    const dataTransfer = new DataTransfer();
    updatedFileList.forEach((file) => {
      dataTransfer.items.add(file);
    });

    // Trigger change event with the new FileList
    changeOnValue(dataTransfer.files);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({
          field: { onChange, value, ...field },
          fieldState: { error },
        }) => (
          <>
            <Form.Item label={label}>
              <Input
                {...field}
                type={type}
                size="large"
                style={{ width: "100%" }}
                multiple
                onChange={(e) => onChange(e.target?.files)}
              />
              {error && (
                <small style={{ color: "red" }}>{error?.message}</small>
              )}
            </Form.Item>

            {/* Preview selected files with remove button */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {fileList.map((file, index) => (
                <div
                  key={index}
                  style={{ textAlign: "center", position: "relative" }}
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <p style={{ fontSize: "12px" }}>{file.name}</p>
                  <Button
                    type="link"
                    danger
                    onClick={() => handleRemove(index)}
                    style={{ position: "absolute", top: 0, right: 0 }}
                  >
                    ✖
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
      />
    </div>
  );
};

export default CustomFileUpload;
