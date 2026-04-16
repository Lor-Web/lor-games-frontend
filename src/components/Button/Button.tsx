import clsx from "clsx";
import type React from "react";
import * as styles from "./Button.module.scss";

type ButtonVariant = "default" | "green" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: "md" | "big";
}

export const Button: React.FC<ButtonProps> = ({
	variant = "default",
	size = "md",
	className,
	children,
	...props
}) => {
	return (
		<button
			className={clsx(
				styles.button,
				variant !== "default" && styles[variant],
				size === "big" && styles.big,
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
