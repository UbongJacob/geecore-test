import { useFormikContext, FormikProps, FormikValues } from "formik";
import { useEffect } from "react";

import AppTextInput, { AppTextInputProps } from "components/AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
interface Props extends AppTextInputProps {
  name: string;
  label: string;
  isTextArea?: boolean;
  customInitialValue?: string;
}

function AppFormField(props: Props) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  }: FormikProps<FormikValues> = useFormikContext();

  const { name, label, id, placeholder, customInitialValue, ...otherProps } =
    props;

  useEffect(() => {
    if (customInitialValue !== undefined) {
      setFieldValue(props.name, customInitialValue);
      setFieldTouched(props.name, false);
    }
  }, [customInitialValue]);

  return (
    <span className={`${props.isTextArea && "flex flex-col"}`}>
      <label
        htmlFor={name}
        className="text-sm font-bold text-gray-700 tracking-wide"
      >
        {label}
      </label>
      {props.isTextArea ? (
        <textarea
          className={`outline-none p-2 placeholder:text-gray-300 placeholder:font-mono  border rounded-lg bg-indigo-100  lg:bg-white border-gray-400 focus:outline-none focus:border-indigo-500 ${
            touched[name] && errors[name] && "border-yellow-400"
          } `}
          name={name}
          id={id}
          placeholder={placeholder}
          rows={6}
          value={values[name]}
          onBlur={() => setFieldTouched(name)}
          onChange={(e: React.ChangeEvent<any>) =>
            setFieldValue(props.name, e.target.value)
          }
        />
      ) : (
        <AppTextInput
          {...otherProps}
          id={name}
          containerClasses={`${
            touched[name] && errors[name] && "border-yellow-400"
          }`}
          placeholder={props.placeholder}
          value={values[name]}
          onBlur={() => setFieldTouched(name)}
          onChange={(e: React.ChangeEvent<any>) =>
            setFieldValue(props.name, e.target.value)
          }
        />
      )}
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </span>
  );
}

export default AppFormField;
