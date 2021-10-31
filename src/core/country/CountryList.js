import React from "react";
import CountryListItem from './CountryListItem';

const showCountries = (props) => {
    return props.countries && Object.entries(props.countries).map((data, index) => {
        return (
            <CountryListItem key={index+1} country={data[1]}  onRowSelected={props.onRowSelected}/>
        );
    });
}

const CountryList = (props) => {
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Code</th>
                    <th scope="col">Population</th>
                </tr>
            </thead>
            { showCountries(props) }
        </table>
        
    )
}

export default CountryList;