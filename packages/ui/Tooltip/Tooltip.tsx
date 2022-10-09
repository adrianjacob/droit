import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Tooltip.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: string;
}

export const Tooltip = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={cx("tooltip")}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <svg
        width="14"
        height="14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7Zm0 3.5a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Zm1.094 7H5.906a.656.656 0 0 1 0-1.313h.438v-1.75h-.219a.656.656 0 0 1 0-1.312H7c.362 0 .656.294.656.656v2.407h.438a.656.656 0 0 1 0 1.312Z"
          fill="#141E82"
        />
      </svg>
      {isVisible && <div className={cx("box")}>{children}</div>}
    </div>
  );
};
