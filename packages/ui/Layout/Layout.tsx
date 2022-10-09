import classNames from "classnames/bind";
import styles from "./Layout.module.scss";

const cx = classNames.bind(styles);

export const Layout = ({ children }) => {
  return (
    <div className={cx("layout")}>
      <div className={cx("wrap")}>{children}</div>
    </div>
  );
};
