import {
  ReactNode,
  useState,
  useEffect,
  useRef,
  Children,
  cloneElement,
} from "react";
import classNames from "classnames/bind";
import styles from "./Field.module.scss";

const cx = classNames.bind(styles);

interface PropsField {
  children?: ReactNode;
  type?: string;
  placeholder?: string;
  id: string;
}

interface PropsFieldItem {
  children?: ReactNode;
  value: string;
  setValue?: Function;
  setIsVisible?: Function;
}
export const Field = ({
  children,
  type = "text",
  placeholder,
  id,
}: PropsField) => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (children) {
      const clickOutsideHandler = (e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
          setIsVisible(false);
        }
      };
      document.addEventListener("mousedown", clickOutsideHandler);
      return () => {
        document.removeEventListener("mousedown", clickOutsideHandler);
      };
    }
  }, []);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={cx("field")}>
      <input
        className={cx("input")}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={!children ? changeHandler : undefined}
        onClick={children ? clickHandler : undefined}
        readOnly={!!children}
      />
      {children && isVisible && (
        <ul className={cx("list")} ref={wrapperRef}>
          {Children.map(children, (child, index) => {
            return cloneElement(child, {
              setValue,
              setIsVisible,
            });
          })}
        </ul>
      )}
    </div>
  );
};

export const FieldItem = ({
  children,
  setValue,
  setIsVisible,
}: PropsFieldItem) => {
  const clickHandler = () => {
    setValue(children);
    setIsVisible(false);
  };
  return (
    <li onClick={clickHandler} className={cx("item")}>
      {children}
    </li>
  );
};
