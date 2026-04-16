import type React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		index: true,
		element: <Home />,
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
