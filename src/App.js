import Header from "./components/Header/Header.js";
import React from "react";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.js";
import PageInfo from "./components/FooterInfo/PageInfo.js";

function App() {

	return (
		<React.Fragment>
			<Header />
			<main>
				<PersonalInfo />
			</main>
			<footer>
				<PageInfo />
			</footer>
		</React.Fragment>
	);
}

export default App;
