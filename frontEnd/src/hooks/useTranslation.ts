import { useState } from "react";

import en_json from "../assets/language/en.json";
import ru_json from "../assets/language/ru.json";
import ka_json from "../assets/language/ka.json";

type Lang = "ka" | "en" | "ru";
const translation: any = { en: en_json, ru: ru_json, ka: ka_json };

export const useTranslation = () => {
    const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");

    const t = (key: string) => {
        const result = key.split(".").reduce((obj: any, k) => obj?.[k], translation[lang]);
        return result ?? key;
    };

    const changeLanguage = (newLang: Lang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return { t, changeLanguage };
};
