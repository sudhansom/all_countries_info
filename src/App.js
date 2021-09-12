import './App.css'
import {useState} from 'react';
import useCountries from './custom-hooks/useCountries'
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import {Switch, route, Route} from 'react-router-dom';
import CartPage from './pages/CartPage';



function App() {
  let url = "https://restcountries.eu/rest/v2/all";
  const [searchCountries, setCountries] = useState([]);
  const [theme, setTheme] = useState(['#f0e6e6', 'f5f0f0'])
  const [error, countries] = useCountries(url, setCountries);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0)



    return <div className='App'>
        <div>
            <Navbar total={total} cart={cart} theme={theme} setTheme={setTheme} setCountries={setCountries} countries={countries}/>
        </div>
        <Switch>
            <Route exact path="/">
            <HomePage total={total} setTotal={setTotal} cart={cart} setCart={setCart} theme={theme} setTheme={setTheme} allData={searchCountries}/>
            </Route>
            <Route exact path="/:countryName">
            <CountryPage />
            </Route>
            <Route exact path="/cart">
            <CartPage cart={cart} setCart={setCart}/>
            </Route>
        </Switch>
        
            
         </div>
}

export default App
