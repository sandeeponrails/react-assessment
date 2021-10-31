import React, { useEffect, useState } from "react";

const LanguageListItem = (props) => {
    const [language, setLanguage] = useState();

    useEffect(() => {
        setLanguage(props.language);
    },[props]);

    return (
        <div>
            {language && (
                <div>
                    <div>
                        {`Name: ${language.name}, Code: ${language.iso639_1}`}
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageListItem;