import './App.css'
import useCountries from './custom-hooks/useCountries'
import useCountry from './custom-hooks/useCountry'
import CountriesTable from './components/CountriesTable';
import TabContainer from './components/TabContainer';

function App() {
  let url = "https://restcountries.eu/rest/v2/all";
  const [error, countries] = useCountries(url)
  const name = "Nepal";
  url = `https://restcountries.eu/rest/v2/name/${name}`;
  const [err, country] = useCountry(url)
  console.log('App:-',countries)

  

  
  return <div className='App'>
  
            <TabContainer allData={countries}/>
      </div>
}

export default App
