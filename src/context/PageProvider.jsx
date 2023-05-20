import { useEffect, useMemo, useState } from "react";
import PageContext from "./PageContext";
import PropTypes from 'prop-types';
import { getColor, getLanguage, setColor, setLanguage } from "../helpers/localStorage";

function PageProvider({ children }) {
    const [isBR, setBR] = useState(true)
    const [isDark, setDark] = useState(true)

    const handleChangeLanguage = (set) => {
        setLanguage(set)
        setBR(set)
    }

    const handleChangeColor = (set) => {
        setColor(set)
        setDark(set)
    }

    useEffect(() => {
        const language = getLanguage()
        const color = getColor();
        setBR(language)
        setDark(color)
    }, [])

    const values = useMemo(() => ({
        isBR,
        handleChangeLanguage,
        isDark,
        handleChangeColor,
    }), [isBR, isDark]);

    return (
        <PageContext.Provider value={ values }>
            { children }
        </PageContext.Provider>
    )
}

PageProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
  };

export default PageProvider;