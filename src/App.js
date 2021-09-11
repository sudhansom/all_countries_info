import './App.css'
import {useState} from 'react';
import useCountries from './custom-hooks/useCountries'
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import {Switch, route, Route} from 'react-router-dom';
import { colors } from '@material-ui/core';


function App() {
  let url = "https://restcountries.eu/rest/v2/all";
  const [searchCountries, setCountries] = useState([]);
  const [theme, setTheme] = useState(['#f0e6e6', 'f5f0f0'])
  const [error, countries] = useCountries(url, setCountries)


    return <div className='App'>
        <div>
            <Navbar theme={theme} setTheme={setTheme} setCountries={setCountries} countries={countries}/>
        </div>
        <Switch>
          <Route exact path="/">
          <HomePage theme={theme}setTheme={setTheme} allData={searchCountries}/> 
          </Route>
          <Route exact path="/:countryName">
          <CountryPage />
          </Route>
        </Switch>
            
         </div>
}

export default App
