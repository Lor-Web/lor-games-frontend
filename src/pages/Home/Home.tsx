import type React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { BETA_PASSWORD } from "../../utils/constant";
import * as styles from "./Home.module.scss";

const Home: React.FC = () => {
	const [betaPassword, setBetaPassword] = useState<string>();
	const [isTestMode, setIsTestMode] = useState<boolean>(false);

	const handleSendBetaPassword = () => {
		setIsTestMode(betaPassword === BETA_PASSWORD);
	};

	return (
		<div className={styles.home}>
			{!isTestMode ? (
				<Card className={styles.homeWidget}>
					<h1>
						Это beta версия. <br /> Чтобы пройти дальше введи код тестировщика
					</h1>

					<Input
						placeholder="Код"
						onChange={(v) => setBetaPassword(v.target.value)}
					/>
					<Button onClick={handleSendBetaPassword}>отправить</Button>
				</Card>
			) : (
				<Card className={styles.homeWidget}>
					<Button>квиз</Button>
				</Card>
			)}
		</div>
	);
};

export default Home;
