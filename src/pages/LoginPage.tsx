import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

import HeroImage from "assets/images/hero.svg";
import routes from "navigation/routes";
import { useUserStore } from "store/user.store";
import Logo from "assets/images/logo.png";
import AppForm from "components/forms/AppForm";
import AppFormField from "components/forms/AppFormField";
import SubmitButton from "components/forms/SubmitButton";
import { FormikHelpers } from "formik";
import allowedEmail from "assets/other/allowedEmails";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email().required().trim().label("Email"),
  password: Yup.string().required().min(8).label("Password").trim(),
});

const initialValues = {
  email: "",
  password: "",
};

interface LoginRequest {
  email: string;
  password: string;
}

const LoginPage = (): JSX.Element => {
  const { setUserDetails } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = async (
    { email, password }: LoginRequest,
    { resetForm }: FormikHelpers<LoginRequest>
  ) => {
    console.log({ email, password });

    if (email === allowedEmail.admin || email === allowedEmail.user) {
      navigate(routes.DASHBOARD_LAYOUT);
      resetForm();
      setUserDetails({ email });
    } else {
      toast("Invalid Credentials", {
        type: "error",
      });
    }
    // navigate(routes.DASHBOARD_LAYOUT, { replace: true });
  };

  return (
    <main className="lg:flex min-h-screen bg-indigo-100  lg:bg-white">
      <section className="lg:w-1/2 xl:max-w-screen-sm -mt-10">
        <div className="py-12  flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <img
              src={Logo}
              className="w-36 ml-2 "
              alt="logo"
              draggable={false}
            />
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
          >
            Log in
          </h2>

          <AppForm
            className="mt-12 flex flex-col gap-9"
            initialValues={initialValues}
            onFormSubmit={handleSubmit}
            validationSchema={SigninSchema}
          >
            <AppFormField
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@mail.com"
            />

            <AppFormField
              label="Password"
              name="password"
              type="password"
              autoComplete="password"
              placeholder="Enter your password"
            />

            <SubmitButton title="Login" />
          </AppForm>
        </div>
      </section>

      <section className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <img
            className="h-full w-full"
            src={HeroImage}
            alt="hero"
            draggable={false}
          />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
