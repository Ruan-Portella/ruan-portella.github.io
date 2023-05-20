import { useEffect, useMemo, useState } from "react";
import PageContext from "./PageContext";
import PropTypes from 'prop-types';
import { getLanguage, setLanguage } from "../helpers/localStorage";

function PageProvider({ children }) {
    const [isBR, setBR] = useState(true)

    const handleChangeLanguage = (set) => {
        setLanguage(set)
        setBR(set)
    }

    useEffect(() => {
        const language = getLanguage()
        setBR(language)
    }, [])

    const values = useMemo(() => ({
        isBR,
        handleChangeLanguage,
    }), [isBR]);

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