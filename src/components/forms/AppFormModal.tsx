import AppModal, { AppModalProps } from "components/AppModal";
import { ImCancelCircle } from "react-icons/im";

interface Props extends AppModalProps {
  title: string;
  subtitle: string;
}

const AppFormModal = ({
  isVisible,
  title,
  subtitle,
  children,
  onRequestClose,
}: Props): JSX.Element => {
  return (
    <AppModal onRequestClose={onRequestClose} isVisible={isVisible}>
      <div className="flex items-center justify-between">
        <h4 className="font-mono font-bold text-base md:text-lg">{title}</h4>
        <ImCancelCircle
          onClick={onRequestClose}
          className="text-orange-500 hidden sm:block ml-5 text-lg sm:text-xl md:text-2xl animate-bounce cursor-pointer"
        />
      </div>

      <h5 className="mt-2 font-sans text-sm md:text-base lg:text-lg font-semibold'">
        {subtitle}
      </h5>
      {children}
    </AppModal>
  );
};

export default AppFormModal;
