import Header from "./components/Header/Header.js";
import React from "react";
import Brief from "./components/SkillInfo/Brief.js";

function App() {

	return (
		<React.Fragment>
			<Header />
			<main>
				<Brief />
			</main>
		</React.Fragment>
	);
}

export default App;
