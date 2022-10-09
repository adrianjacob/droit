import { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

export const Button = ({ children, onClick }: Props) => (
  <button onClick={onClick}>{children}</button>
);
