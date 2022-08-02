import Card from "../../UI/Card";
import React, { useContext, useEffect } from "react";
import styles from "./Experiences.module.css";
import ExperienceItem from "./ExperienceItem";
import LanguageContext from "../../Context/LanguageContext.js";
import { LanguageMap, LANGUAGE_LIST } from "../../Language/Language.js"

const EXPERIENCES_LIST = [
	{
		id: 'e1',
		name: 'THE DOJO',
		title: 'Game Engineer',
		description_en: [
			<li>Built several core games based on <b>Pixi.js</b> and design core function for requirements then bundled by <b>webpack</b>.</li>,
			<li>Use <b>state pattern</b> as the core manager to control the process of the game components.</li>,
			<li>Make good use of OOP to enhance the ease of use and readability of <b>Typescript</b> code.</li>,
			<li>Use SourceTree and Fork as Git GUI for version control, and manage tasks on Jira.</li>,
			<li>Complete all front-end features of Free Round project.</li>,
			<li>Responsible for game client structure maintenance and upgrade.</li>,
			<li>Experience in <b>API</b> and <b>websocket</b> connection.</li>,
			<li>Experience in maintaining Back-Office with <b>React.js</b>.</li>
		],
		description_cn: [
			<li>基於 <b>Pixi.js</b> 的2D繪圖引擎製作數款遊戲，並使用 <b>webpack</b> 進行打包</li>,
			<li>了解 <b>state pattern</b> 並透過次設計方式控管元件</li>,
			<li>熟悉<b>物件導向設計</b>，並在兩年多時間都使用 <b>TypeScript</b> 實作專案</li>,
			<li>獨自完成專案 Free Round 的前端實作經驗</li>,
			<li>負責維護前端遊戲底層架構與更新</li>,
			<li>介接 <b>API</b> 與 <b>Websocket</b> 經驗</li>,
			<li>使用 <b>react</b> 維護公司後台經驗</li>
		],
	},
	{
		id: 'e2',
		name: 'Think a Bit Lab',
		title: 'Game Developer',
		description_en: [
			<li>Use <b>HTC VIVE</b> as the device base, built several Virtual Reality games based on steamVR.</li>,
			<li>Built 4+ Augmented Reality products through vuforia development kit with Han Lin Co., Ltd.</li>,
			<li>Experience in <b>3DsMax</b> to build models, textures, lighting, motion adjustments, etc.</li>,
			<li>Design the core gameplay and functions for the products and put it on the application platform.</li>
		],
		description_cn: [
			<li>透過 <b>steamVR</b> 在 <b>HTC VIVE</b> 上製作了數款 VR 遊戲</li>,
			<li>與翰林文教合作製作了4款以上的擴增實境App</li>,
			<li>使用 <b>3D Max</b> 製作模型、燈光、骨架動作等</li>,
			<li>設計遊戲的主要玩法，並有上架 App store 與 google play 的經驗</li>
		],
	}
];

const Experiences = (props) => {
	const languageCtx = useContext(LanguageContext);
	const language = languageCtx.language;

	const experiencesList = EXPERIENCES_LIST.map((exp) => {
		return (
			<Card key={exp.id}>
				<ExperienceItem
					id={exp.id}
					name={exp.name}
					title={exp.title}
					description={(language === LanguageMap.get(LANGUAGE_LIST.ENGLISH)) ? exp.description_en : exp.description_cn}
				></ExperienceItem>
			</Card>

		);
	});

	return (
		<LanguageContext.Consumer>
			{
				() => {
					return (
						<section className={styles.experiences}>
							{experiencesList}
						</section>
					)
				}
			}
		</LanguageContext.Consumer>
	);
}

export default Experiences;