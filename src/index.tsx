import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { disneyTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const queryclient = new QueryClient();

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryclient}>
			<ThemeProvider theme={disneyTheme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
