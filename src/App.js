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
  const cart = useSelector(state=>state.reducerCountries.cart)
  const colNames = useSelector(state=>state.reducerCountries.colNames)
  const theme = useSelector(state=>state.reducerTheme.theme)
  if(theme){localStorage.setItem('theme', theme)}
  localStorage.setItem('cart', JSON.stringify(cart))
  localStorage.setItem('colNames', JSON.stringify(colNames))
  console.log('cart:- ', cart)
  const colr = theme;
  const styles = {backgroundColor:colr}

    return <div className='App' style={styles}>
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
