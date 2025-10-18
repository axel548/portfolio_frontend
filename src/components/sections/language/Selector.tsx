import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMenuStore } from '../../../utlits/store/menu.store';

const LanguageSelector: React.FC = () => {
    const { data, language, setData, setLanguage } = useMenuStore();
    useEffect(() => {
        setData(language);
        setLanguage(language);
    }, []);
    const languages = data?.languages || [];
    const handleLanguageChange = (code: string) => {
        setLanguage(code);
        console.log(`Idioma cambiado a: ${code}`);
        setData(code);
    };


    return (
        <div className="language-selector">
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="languageDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {languages.find((lang: any) => lang.code === language)?.name || 'Seleccionar idioma'}
                </button>
                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                    {languages.map((lang: any) => (
                        <li key={lang.code}>
                            <button
                                className="dropdown-item"
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                {lang.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LanguageSelector;