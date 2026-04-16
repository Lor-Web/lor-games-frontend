import type React from "react";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

const App: React.FC = () => {
	return (
		<div>
			<Card>
				<Badge>
					<h1>hi</h1>
				</Badge>
				<Input />
				<br />
				<br />
				<Button>TEST</Button>
			</Card>
		</div>
	);
};

export default App;
