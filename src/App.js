import './App.css'
import {useState} from 'react';
import useCountries from './custom-hooks/useCountries'
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import {Switch, Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import {useSelector} from 'react-redux';

function App() { 
  
  const [error, countries] = useCountries();
  const total = useSelector(state=>state.total)
  const cart = useSelector(state=>state.cart)
  const theme = useSelector(state=>state.theme)
  localStorage.setItem('cart', JSON.stringify(cart))
  localStorage.setItem('total',total)
  localStorage.setItem('theme',JSON.stringify(theme))

  
    return <div className='App'>
        <div>
            <Navbar />
        </div>
        <Switch>
            <Route exact path="/">
                <HomePage   />
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
