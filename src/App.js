import './App.css'
import useCountries from './custom-hooks/useCountries'

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import {Switch, route, Route} from 'react-router-dom';

function App() {
  let url = "https://restcountries.eu/rest/v2/all";
  const [error, countries] = useCountries(url)

    return <div className='App'>
        <Switch>
          <Route exact path="/">
          <HomePage allData={countries}/> 
          </Route>
          <Route exact path="/:countryName">
          <CountryPage />
          </Route>
        </Switch>
            
         </div>
}

export default App
