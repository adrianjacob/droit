import { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type Variants = "primary" | "secondary";
type Sizes = "small" | "large";

interface Props {
  children?: ReactNode;
  onClick?: MouseEventHandler;
  variant?: Variants;
  size?: Sizes;
  icon?: string;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "large",
  icon,
}: Props) => (
  <button onClick={onClick} className={cx("button", variant, size)}>
    {/* would be icon library */}
    {icon && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10.83 10.83"
        width="10"
        height="10"
        className={cx("icon")}
      >
        <path
          d="M6.25 5.75h-.5V10c0 .18-.15.33-.33.33s-.33-.15-.33-.33V5.75H.83C.65 5.75.5 5.6.5 5.42s.15-.33.33-.33h4.25V.83c0-.18.15-.33.33-.33s.33.15.33.33v4.25h4.25c.18 0 .33.15.33.33s-.15.33-.33.33H6.24Z"
          fill="#64748b"
          stroke="#141e82"
        />
      </svg>
    )}
    {children}
  </button>
);
