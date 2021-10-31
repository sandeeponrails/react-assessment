import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const CountryListItem = (props) => {
    const [country, setCountry] = useState();

    useEffect(() => {
        setCountry(props.country);
    }, [props]);

    return (
        country ?
        <tbody>
        <tr onClick={() => props.onRowSelected(props.country)}>
            <td><Link to="/countryDetail">{country.name}</Link></td>
            <td>{country.alpha2Code}</td>
            <td>{country.population}</td>
        </tr></tbody> : <tbody><tr><td>Loading....</td></tr></tbody>
    );
}

export default CountryListItem;