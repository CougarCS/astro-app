import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./app-router";

import "./styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
