import { useMemo, useState } from "react";
import LanguageContext from "./LanguageContext";
import PropTypes from 'prop-types';

function LanguageProvider({ children }) {
    const [isBR, setBR] = useState(true)

    const handleChangeLanguage = (set) => {
        setBR(set);
    }

    const values = useMemo(() => ({
        isBR,
        handleChangeLanguage,
    }), [isBR]);

    return (
        <LanguageContext.Provider value={ values }>
            { children }
        </LanguageContext.Provider>
    )
}

LanguageProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
  };

export default LanguageProvider;