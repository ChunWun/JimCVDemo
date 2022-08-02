import Header from "./components/Header/Header.js";
import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.js";
import PageInfo from "./components/FooterInfo/PageInfo.js";
import LanguageContext from './components/Context/LanguageContext';
import { LanguageMap, LANGUAGE_LIST } from './components/Language/Language.js';

function App() {
	const [language, setLanguage] = useState(LanguageMap.get(LANGUAGE_LIST.ENGLISH));

	const onChangeLanguage = (value) => {
		setLanguage(value);
	}

	return (
		<LanguageContext.Provider value={{
			language: language
		}}>
			<Header onChangeLanguage={onChangeLanguage} />
			<main>
				<PersonalInfo />
			</main>
			<footer>
				<PageInfo />
			</footer>
		</LanguageContext.Provider >
	);
}

export default App;
