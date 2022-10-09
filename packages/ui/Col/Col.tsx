import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Col.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  start?: number;
  end?: number;
}

export const Col = ({ children, start = 1, end = -1 }: Props) => (
  <div className={cx(start && "start" + start, end && "end" + end)}>
    {children}
  </div>
);
