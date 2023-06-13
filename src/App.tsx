import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

function App() {
	return (
		<>
			<header></header>
			<main>
				<Routes>
					<Route path="/" element={<p>Welcome!</p>} />
				</Routes>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
