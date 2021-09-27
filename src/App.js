import './App.css'
import {useState} from 'react';
import useCountries from './custom-hooks/useCountries'
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import TablContainr from './components/dynamicTable/TablContainr';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import {Switch, Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import {useSelector} from 'react-redux';

function App() { 
  
  const [error, countries] = useCountries();  
  const cart = useSelector(state=>state.reducer.cart)
  const total = useSelector(state=>state.reducer.total)
  const theme = useSelector(state=>state.reducerTheme.theme)
  localStorage.setItem('theme', JSON.stringify(theme))
  localStorage.setItem('cart', JSON.stringify(cart))
  localStorage.setItem('total', JSON.stringify(total))
  console.log('cart:- ', cart)

    return <div className='App'>
        <div>
            <HeaderSection />
        </div>
        <Switch>
            <Route exact path="/">
                <TablContainr select={1} />
            </Route>
            <Route exact path="/country/:countryName">
                <CountryPage />
            </Route>
            <Route exact path="/cart/">
                <TablContainr select={2} />
            </Route>
        </Switch>
        
            
         </div>
}

export default App
