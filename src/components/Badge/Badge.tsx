import * as styles from "./Badge.module.scss";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <span className={styles.badge}>{children}</span>;
};

export default Badge;
