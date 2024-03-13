import { useState , createContext, useContext} from "react";

const LangContext = createContext ();

export const useLangContext = () => useContext (LangContext);

export const LangProvider = ({children}) => {
    const [lang, setLang] = useState('fr');

    const changeLang = ()  => {
        setLang(prev => prev === 'fr' ? 'en' : 'fr');
    };

    return (
        <LangContext.Provider value={{lang, changeLang}}>
            {children}
        </LangContext.Provider>
    );
}