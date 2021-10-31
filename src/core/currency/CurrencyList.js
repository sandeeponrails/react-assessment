import React, { useEffect, useState } from "react";

import CurrencyListItem from "./CurrencyListItem";

const CurrencyList = (props) => {
    const [currencies, setCurrencies] = useState();

    useEffect(() => {
        setCurrencies(props.currencies);
    }, [props]);

    return (
        <div>
            {currencies && (
                <div>
                    {currencies.map((currency, index) => (
                        <CurrencyListItem currency={currency} key={index}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CurrencyList;