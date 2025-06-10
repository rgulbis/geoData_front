import { useEffect, useState } from 'react'
import './App.css'

function App() {
const[countries, setCountries] = useState([]);
useEffect(() => {
    async function fetchCountries() {
        const response = await fetch("http://127.0.0.1:8000/api/countries");
        const countriesAPI = await response.json();
        setCountries(countriesAPI);
    }
    fetchCountries();
}, []);
  return (
    <>
    <ul>
    {countries.map((country) =>
        <li key={country.id}>{country.name}</li>
    )}
    </ul>
    </>
  )
}

export default App
