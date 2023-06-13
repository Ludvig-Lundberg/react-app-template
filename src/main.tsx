import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/style.css";
import { Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<header></header>
		<Routes>
			<main>
				<Route path="/">
					<App />
				</Route>
			</main>
		</Routes>
		<footer></footer>
	</React.StrictMode>
);
