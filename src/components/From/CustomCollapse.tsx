/* eslint-disable @typescript-eslint/no-explicit-any */
import { Collapse, Radio } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

const { Panel } = Collapse;

type CustomCollapseProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  customStyle?: string;
  disabled?: boolean;
  changeOnValue: (value: any) => void;
};

const CustomCollapse: React.FC<CustomCollapseProps> = ({
  label,
  name,
  options,
  customStyle,
  disabled,

  changeOnValue,
}) => {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });

  useEffect(() => {
    changeOnValue(inputValue);
  }, [inputValue]);

  return (
    <div className={customStyle}>
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        style={{
          marginBottom: "20px",
          border: "1px solid white",
          borderRadius: "8px",
        }}
      >
        <Panel
          style={{ color: "white",  }} // Styling for Panel
          header={<span style={{ color: "white" }}>{label}</span>} // Header styling
          key="1"
        >
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Radio.Group
                {...field}
                disabled={disabled}
               
                style={{ display: "flex", flexDirection: "column" }}
              >
                {options?.map((item) => (
                  <Radio
                    key={item.value}
                    value={item.value}
                    style={{ color: "#ffb84b" }} // Gold color for radio labels
                    disabled={item.disabled}
                  >
                    {item.label}
                  </Radio>
                ))}
              </Radio.Group>
            )}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default CustomCollapse;
