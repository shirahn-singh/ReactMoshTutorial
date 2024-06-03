import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  visibility: boolean;
  onClose: () => void;
}

const Alert = ({ children, visibility, onClose }: AlertProps) => {
  return visibility ? (
    <div className={"alert alert-primary"} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  ) : null;
};

export default Alert;
