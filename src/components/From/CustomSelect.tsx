// import { Form, Select } from "antd";
// import { Controller } from "react-hook-form";

// type TPHSelectProps = {
//   label: string;
//   name: string;
//   options: { value: string; label: string; disabled?: boolean }[] | undefined;
//   customStyle?: string;
//   disabled?: boolean;
//   mode?: "multiple" | undefined;
// };

// const CustomSelect = ({
//   label,
//   name,
//   options,
//   customStyle,
//   disabled,
//   mode,
// }: TPHSelectProps) => {
//   return (
//     <div className={`${customStyle}`}>
//       <Controller
//         name={name}
//         render={({ field, fieldState: { error } }) => (
//           <Form.Item label={label}>
//             <Select
//               mode={mode}
//               style={{ width: "100%" }}
//               {...field}
//               options={options}
//               size="large"
//               disabled={disabled}
//             />
//             {error && <small style={{ color: "red" }}>{error.message}</small>}
//           </Form.Item>
//         )}
//       />
//     </div>
//   );
// };

// export default CustomSelect;

import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
import "./labelColor.css";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  customStyle?: string;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  isLabelColor?: boolean;
  placeholder?: string;
};

const CustomSelect = ({
  label,
  name,
  options,
  disabled,
  mode,
  isLabelColor,
  placeholder,
}: TPHSelectProps) => {
  return (
    <div className={`${isLabelColor && "custom-label"}`}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Select
              mode={mode}
              className={isLabelColor ? "custom-dropdown" : ""}
              style={{ width: "100%" }}
              {...field}
              options={options}
              size="large"
              disabled={disabled}
              placeholder={placeholder}
              dropdownClassName={isLabelColor ? "custom-dropdown-menu" : ""}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomSelect;
