import './App.css'
import useCountries from './custom-hooks/useCountries'
import useCountry from './custom-hooks/useCountry'

function App() {
  const url = "https://restcountries.eu/rest/v2/all";
  const [error, countries] = useCountries(url)
  const foundCountry = countries.find(elem => elem.name==="Nepal")
  //console.log("country name:",countries[0].name)
  
  return <div className='App'>
  
  </div>
}

export default App
