import React, { useState, useEffect, useContext } from "react"
import Layout from '../core/Layout';
import CountryList from "./country/CountryList";
import countryData from './data.json';
import { CountryContext } from "../CountryContext";
import Search from "./Search";
const Home = () => {
    const [countries, setCountries] = useState([]);
    const { setCountry } = useContext(CountryContext);
    const [searchText, setSearchText] = useState();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [title, setTitle] = useState("Sort By")
    const [sortBy, setSortBy] = useState();
    const sortByPopulationData = [

        {
            name: "Population (ascending)",
            key: "population-ascending",
            id: "1"
        },
        {
            name: "Population (descending)",
            key: "population-descending",
            id: "2"
        }
    ];

    const handleCountrySelected = (country) => {
        setCountry(country);
    }
    const handleSearch = (e) => {
        let text = e.target.value;
        setSearchText(text);
        setSortBy({})
    }
    const dropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const handleItemSelect = (e, data) => {
        e.preventDefault();
        setTitle(data.name);
        handleSort(data)
        dropdownToggle();
    }
    const handleSort = (itemSelected) => {
        switch (itemSelected.key) {

            case "population-ascending":
                setSortBy({
                    key: "population",
                    ascending: true
                });
                break;
            case "population-descending":
                setSortBy({
                    key: "population",
                    ascending: false
                });
                break;
            default:
                setSortBy(undefined);
        }
    }
    const sortedCountries = (data, type) => {
        return data.sort((a, b) => {
            let x = a[sortBy.key];
            let y = b[sortBy.key];
            return ( type ? x - y : y - x);
        });
        
    }

    useEffect(() => {
        let countries = countryData;
        setCountries(countries)
        if (searchText) {
             countries = countryData.filter((country) => country.name.toLowerCase().match(new RegExp(searchText.toLowerCase())));
             setCountries(countries)
        } 
        if (sortBy) {
            switch (sortBy.ascending) {
                case false:
                    countries = sortedCountries(countryData, false)
                    break;
                case true:
                    countries = sortedCountries(countryData, true)
                    break;
            }
            setCountries((prevCountries)=>{
                return {...prevCountries, ...countries};
            });

        }

    }, [searchText, sortBy]);
    return (
        <Layout title="Assessment" description="React Coding Test Assessment" className="container-fluid">
            <div>
                <h1>List of Countries</h1>
                <div>
                    <div>
                        <div>
                                <Search search={handleSearch}/>
                                    <div className="dropdown float-right" style={{marginRight: "120px", marginBottom: "10px"}}>
                                        <button className="btn btn-secondary dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false" onClick={dropdownToggle} data-testid="sortbtn">
                                            {title}
                                        </button>
                                        {isDropdownOpen && (<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ display: isDropdownOpen ? 'inline' : 'none' }}>
                                            {sortByPopulationData.map((data, index) => {
                                                return (
                                                    <a className="dropdown-item" href="#" key={data.id} onClick={(e) => handleItemSelect(e, data)}>{data.name}</a>
                                                )
                                            })}
                                        </div>)}
                                </div>
                            
                        </div>
                        <CountryList countries={countries} onRowSelected={handleCountrySelected} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Home;