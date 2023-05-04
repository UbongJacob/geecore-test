import { InputHTMLAttributes } from "react";

export interface AppTextInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  containerClasses?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}
<input />;

const AppTextInput = ({
  containerClasses,
  leftIcon,
  rightIcon,
  type,
  ...otherProps
}: AppTextInputProps): JSX.Element => {
  return (
    <div
      className={` w-full text-lg py-1 border rounded-lg px-3 bg-indigo-100  lg:bg-white border-gray-400 focus:outline-none focus:border-indigo-500 ${containerClasses}`}
    >
      {!!leftIcon && leftIcon}

      <input
        className=" flex bg-transparent w-full  outline-none px-1 placeholder:text-gray-300 placeholder:font-mono placeholder:text-base "
        type={type ? type : "text"}
        {...otherProps}
      />
      {!!rightIcon && rightIcon}
    </div>
  );
};

export default AppTextInput;
