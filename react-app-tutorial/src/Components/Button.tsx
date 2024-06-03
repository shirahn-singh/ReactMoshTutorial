import React, { useState } from "react";

interface Props {
  children: string;
  onClickButton: () => void;
  color?: "primary" | "secondary" | "danger" | "success";
}

const Button = ({ children, onClickButton, color = "secondary" }: Props) => {
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
