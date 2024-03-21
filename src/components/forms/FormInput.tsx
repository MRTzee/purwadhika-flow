import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormikHandlers } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface FormInputProps {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: FormikHandlers["handleChange"];
  onBlur: FormikHandlers["handleBlur"];
  value: string;
  isError: boolean;
  errors: string | undefined;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  isError,
  errors,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? "text-red-500" : ""}>
        {name}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {isError ? <div className="text-xs text-red-500">{errors}</div> : null}
    </div>
  );
};

export default FormInput;
