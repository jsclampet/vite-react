interface Props {
  btnColor?: string;
  children: string;
  color?: "primary" | "secondary" | "info" | "danger" | "success";
  onClick: () => void;
}

const Button = ({ btnColor = "primary", children, onClick }: Props) => {
  return (
    <div className={`btn btn-${btnColor}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
