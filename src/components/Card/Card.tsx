import clsx from "clsx";
import * as styles from "./Card.module.scss";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
	return <div className={clsx(styles.card, className)}>{children}</div>;
};

export default Card;
