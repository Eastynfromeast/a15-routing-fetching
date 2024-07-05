import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Error from "./routes/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
				children: [
					{
						path: "character/:id",
						element: <Detail />,
					},
				],
			},
		],
		errorElement: <Error />,
	},
]);

export default router;
