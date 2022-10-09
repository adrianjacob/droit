import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Text.module.scss";

const cx = classNames.bind(styles);

type Node = "h1" | "h2" | "p" | "label";

interface Props {
  children?: ReactNode;
  as?: Node;
  for?: string;
}

export const Text = ({ children, as = "p", for: htmlFor }: Props) => {
  const Component = as;
  return (
    <Component className={cx(as)} htmlFor={htmlFor}>
      {children}
    </Component>
  );
};
