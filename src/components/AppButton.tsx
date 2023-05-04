export interface AppButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
}

const AppButton = (props: AppButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      {...props}
      className={`bg-indigo-500 text-gray-100 text-center p-2 md:p-3 lg:p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg mt-10 mb-5  ${
        props.disabled && " opacity-50 cursor-not-allowed"
      }  ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default AppButton;
