import React, { useEffect, useState } from "react";
import LanguageListItem from "./LanguageListItem";

const LanguageList = (props) => {
    const [languages, setLanguages] = useState();

    useEffect(() => {
        setLanguages(props.languages);
    }, [props]);

    return (
        <div>
            {languages && (
                <div>
                    {languages.map((language, index) => (
                        <LanguageListItem language={language} key={index}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageList;