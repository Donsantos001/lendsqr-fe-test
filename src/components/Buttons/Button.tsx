import "./Button.scss";

const Button = ({
  text,
  onCustomClick,
  type,
}: {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onCustomClick: (e: any) => void;
}) => {
  return (
    <button
      type={type || "button"}
      className="button-con"
      onClick={onCustomClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
