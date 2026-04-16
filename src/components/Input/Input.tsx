import clsx from "clsx";
import * as styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
	return <input className={clsx(styles.input, className)} {...props} />;
};

export default Input;
