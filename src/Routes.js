import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home  from './core/Home';
import CountryDetail from './core/country/CountryDetail';
import { CountryContext } from './CountryContext';
const Routes = () => {
  const [country, setCountry] = useState({});

  useEffect(()=>{
      const country = localStorage.getItem('country');
      setCountry(JSON.parse(country))
  
    }, [])
    useEffect(()=>{
      localStorage.setItem('country', JSON.stringify(country));

    }, [country])
    return(
    <BrowserRouter>
      <CountryContext.Provider value={{ country, setCountry }}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countryDetail" component={CountryDetail}/>
        </Switch>
      </CountryContext.Provider>
    </BrowserRouter>
    )
}
export default Routes;