import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Text.module.scss";

const cx = classNames.bind(styles);

type Node = "h1" | "h2" | "p";

interface Props {
  children?: ReactNode;
  as?: Node;
}

export const Text = ({ children, as = "p" }: Props) => {
  const Component = as;
  return <Component className={cx(as)}>{children}</Component>;
};
