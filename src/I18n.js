import { createI18n } from 'react-router-i18n';
import zh_twJSON from './public/zh-tw.json';
import zh_cnJSON from './public/zh-cn.json';

const locales = ['zh-tw', 'zh-cn'];

const translations = {
	'zh-tw': zh_twJSON,
	"zh-cn": zh_cnJSON
}

const I18n = createI18n(
	locales,
	translations,
);

export default I18n;