import { ReactNode } from "react";
import "./Alert.css";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        <p>{children}</p>
        <button
          type="button"
          className="btn btn-close "
          data-bs-dismiss="alert"
          onClick={onClick}
        ></button>
      </div>
    </>
  );
};

export default Alert;
