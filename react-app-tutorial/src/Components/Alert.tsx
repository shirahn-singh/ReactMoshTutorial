import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  visibility: boolean;
}

const Alert = ({ children, visibility }: AlertProps) => {
  return visibility ? (
    <div className={"alert alert-primary"} role="alert">
      {children}
    </div>
  ) : null;
};

export default Alert;
