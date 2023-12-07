import React from "react";
import { useFormikContext, ErrorMessage } from "formik";

interface Props {
  name: string;
  placeholder?: string;
  disable?: boolean;
  type?: string;
}

export const InputFieldText: React.FC<Props> = ({
  name,
  placeholder,
  disable = false,
  type = "text",
}) => {
  const formik = useFormikContext();
  const { value } = formik.getFieldProps(name);

  return (
    <>
      <div className="flex justify-center items-left">
        <input
          name={name}
          placeholder={placeholder}
          value={value === undefined ? "" : value}
          onChange={(event) => {
            formik.setFieldValue(name, event.target.value);
          }}
          style={{
            width: "100%"
          }}
          disabled={disable}
          type={type}
          className="px-3.5 py-2 border border-[#bdbdbd] rounded focus:border-[#17C815] focus:outline-none focus:ring-1 focus:ring-[#17C815]"
        />
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => <p className="text-principal-15">{msg}</p>}
      />
    </>
  );
};
