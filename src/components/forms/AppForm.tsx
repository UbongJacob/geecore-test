import { Formik } from "formik";

import { FormikHelpers } from "formik";

interface Props
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  onFormSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>;
  validationSchema: { [x: string]: any };
  initialValues: { [x: string]: any };
  [x: string]: any;
}

function AppForm({
  initialValues,
  onFormSubmit,
  validationSchema,
  children,
  ...otherProps
}: Props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={validationSchema}
    >
      {() => <form {...otherProps}>{children}</form>}
    </Formik>
  );
}

export default AppForm;
