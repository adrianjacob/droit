import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Spacer.module.scss";

const cx = classNames.bind(styles);

type Sizes =
  | 1
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 56
  | 64
  | 80
  | 96
  | 112
  | 128;

interface Props {
  children?: ReactNode;
  isDivider?: boolean;
  y?: Sizes;
  x?: Sizes;
}

export const Spacer = ({ children, isDivider = false, y = 32, x }: Props) =>
  isDivider ? (
    <>
      <div className={cx("py" + y, x && "px" + x)} />
      <hr className={cx("divider")} />
      <div className={cx("py" + y, x && "px" + x)} />
    </>
  ) : (
    <div className={cx("py" + y, x && "px" + x)}>{children}</div>
  );
