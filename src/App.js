import './App.css'
import {useState} from 'react';
import useCountries from './custom-hooks/useCountries'
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import {Switch, Route} from 'react-router-dom';
import CartPage from './pages/CartPage';

function App() { 
  const [theme, setTheme] = useState(['#f0e6e6', 'f5f0f0'])
  const [error, countries] = useCountries();
  
  //localStorage.getItem('cart')?setCart(localStorage.getItem('cart')):localStorage.setItem('cart', cart);
  
  
  
    return <div className='App'>
        <div>
            <Navbar  theme={theme} setTheme={setTheme}  countries={countries}/>
        </div>
        <Switch>
            <Route exact path="/">
                <HomePage  theme={theme} setTheme={setTheme} />
            </Route>
            <Route exact path="/country/:countryName">
                <CountryPage />
            </Route>
            <Route exact path="/cart/">
                <CartPage />
            </Route>
        </Switch>
        
            
         </div>
}

export default App
