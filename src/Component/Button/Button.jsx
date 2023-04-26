import React from "react";
import Headlines from "../Headlines/Headline";
const Button = ({
  className,
  title,
  onClick,
  disabled = false,
  styles = {},
  children,
}) => {
  return (
    <button
      className={`${className}  overWriteInputButtonCSS`}
      onClick={onClick}
      disabled={disabled}
      style={styles}
    >
      {children || <Headlines text={title} />}
    </button>
  );
};
export default Button;
