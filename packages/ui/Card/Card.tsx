import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
}

export const Card = ({ children }: Props) => (
  <div className={cx("card")}>{children}</div>
);
