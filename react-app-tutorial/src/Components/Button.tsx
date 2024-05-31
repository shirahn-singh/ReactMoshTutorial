import React from "react";

interface Props {
  children: string;
  onClickButton: () => void;
  color: string;
}

const Button = ({ children, onClickButton, color }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onClickButton}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
