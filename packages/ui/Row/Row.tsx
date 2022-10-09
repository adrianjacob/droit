import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Row.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  cols?: number;
}

export const Row = ({ children, cols = 12 }: Props) => (
  <div className={cx("grid", "cols" + cols)}>{children}</div>
);
