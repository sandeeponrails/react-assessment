import React, { useEffect, useState } from "react";


const CurrencyListItem = (props) => {
    const [currency, setCurrency] = useState();

    useEffect(() => {
        setCurrency(props.currency);
    },[props]);

    return (
        <div>
            {currency && (
                <div key={currency.code}>
                    <div>
                        {`Name: ${currency.name}, Symbol: (${currency.symbol})`}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CurrencyListItem;