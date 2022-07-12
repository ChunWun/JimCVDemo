import Header from "./components/Header/Header.js";
import React from "react";
import Brief from "./components/SkillInfo/Brief.js";
import PageInfo from "./components/FooterInfo/PageInfo";

function App() {

	return (
		<React.Fragment>
			<Header />
			<main>
				<Brief />
			</main>
			<footer>
				<PageInfo />
			</footer>
		</React.Fragment>
	);
}

export default App;
