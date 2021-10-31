import React, { useEffect, useState } from "react"
import { useContext } from "react";
import { CountryContext } from "../../CountryContext";
import Layout from "../Layout";
import LanguageList from "../language/LanguageList";
import CurrencyList from "../currency/CurrencyList";

const CountryDetail= () => {
    const {country, setCountry} = useContext(CountryContext);
    const [languages, setLanguages] = useState();
    const [currencies, setCurrencies] = useState();
    useEffect(() => {
        
        setCountry(country);
        if (country) {
            setLanguages(country.languages);
            setCurrencies(country.currencies);
        }    
    }, [country]);
    return (
        <Layout title="Country" description="Country details page"  className="container-fluid">
            <div>
                {country && (
                    <div>
                        <div>
                            {country.name}
                        </div>
                        <div>
                            <div>
                                <div>
                                    Capital: {country.capital}
                                </div>
                            </div>
                            <div>
                                <div>
                                    Population: {country.population}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <strong>Currencies:</strong>
                                </div>
                                <div>
                                    <div><CurrencyList currencies={currencies} /></div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <strong>Languages:</strong>
                                </div>
                                <div>
                                    <div><LanguageList languages={languages} /></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default CountryDetail;