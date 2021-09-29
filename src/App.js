import './App.css'
import {useState} from 'react';
import useCountries from './custom-hooks/useCountries'
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import TablContainr from './components/dynamicTable/TablContainr';
import CountryPage from './pages/CountryPage';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() { 
  
  const [error, countries] = useCountries();  
  const cart = useSelector(state=>state.reducer.cart)
  const total = useSelector(state=>state.reducer.total)
  const colNames = useSelector(state=>state.reducer.colNames)
  const theme = useSelector(state=>state.reducerTheme.theme)
  localStorage.setItem('theme', theme)
  localStorage.setItem('cart', JSON.stringify(cart))
  localStorage.setItem('total', JSON.stringify(total))
  localStorage.setItem('colNames', JSON.stringify(colNames))
  console.log('cart:- ', cart)
  const colr = theme;

    return <div className='App' style={{backgroundColor:colr}}>
        <Switch>
            <Route exact path="/">
                <HeaderSection />
                <TablContainr select={1} />
            </Route>
            <Route exact path="/country/:countryName">
                <CountryPage />
            </Route>
            
        </Switch>
        
            
         </div>
}

export default App
