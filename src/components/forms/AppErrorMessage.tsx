import { FormikErrors, FormikTouched } from "formik";

interface ErrorMessageProp {
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  visible?: boolean | FormikTouched<any> | FormikTouched<any>[];
}

function AppErrorMessage({
  error,
  visible,
}: ErrorMessageProp): JSX.Element | null {
  if (!visible || !error) return null;

  return (
    <p className="bg-yellow-300 text-sm md:text-base text-start font-mono mt-1 tracking-wider px-2 rounded-md">
      {error.toString()}
    </p>
  );
}

export default AppErrorMessage;
