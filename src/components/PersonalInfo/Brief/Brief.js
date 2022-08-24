import styles from "./Brief.module.css";
import LanguageContext from "../../Context/LanguageContext";
import { LanguageMap, LANGUAGE_LIST } from "../../Language/Language.js";
import { useContext } from "react";

const BRIEF_LIST = {
	title: {
		en: "Jim Huang's brief!",
		cn: "我的簡介"
	},

	paragraph_1: {
		en: "A diligent Game Engineer with 3 years experience. Familiar with TypeScripts in front-end development.Also have experience in JavaScript, React.js and HTML/ CSS.",
		cn: "有兩年多工作經驗的遊戲前端工程師，主要開發前端網頁遊戲，在工作上使用 TypeScript 進行開發，Git版控。並曾經開發過Unity遊戲。閒暇之餘會自學 React 等前端技術以及精進外語能力。"
	},

	paragraph_2: {
		en: "I'm also passionate about building a good workflow to shorten game production time.",
		cn: ""
	}
}

const Brief = () => {
	const languageCtx = useContext(LanguageContext);

	return (
		<section className={styles.brief}>
			<h2>{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH) ? BRIEF_LIST.title.en : BRIEF_LIST.title.cn}</h2>
			<p>
				{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH) ? BRIEF_LIST.paragraph_1.en : BRIEF_LIST.paragraph_1.cn}
			</p>
			<p>
				{(languageCtx.language) === LanguageMap.get(LANGUAGE_LIST.ENGLISH) ? BRIEF_LIST.paragraph_2.en : BRIEF_LIST.paragraph_2.cn}
			</p>
		</section>
	);
}

export default Brief;