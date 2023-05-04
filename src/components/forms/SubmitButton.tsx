import { useFormikContext } from "formik";

import AppButton, { AppButtonProps } from "components/AppButton";
import AnimatedButtonLoader from "assets/animation/AnimatedButtonLoader";

interface Props extends AppButtonProps {
  title: string;
}

function SubmitButton({ title, isLoading }: Props) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      disabled={isLoading}
      onClick={() => handleSubmit()}
      type="button"
      className="flex justify-center gap-3 items-center"
    >
      {isLoading && <AnimatedButtonLoader />}

      {title}
    </AppButton>
  );
}

export default SubmitButton;
