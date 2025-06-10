import { useEffect, useState } from 'react'
import './App.css'
import Country from './Country';

function App() {
const[countries, setCountries] = useState([]);
const[loading, setLoading] = useState(true);
useEffect(() => {
    async function fetchCountries() {
        const response = await fetch("http://127.0.0.1:8000/api/countries");
        const countriesAPI = await response.json();
        setCountries(countriesAPI);
        setLoading(false);
    }
    fetchCountries();
}, []);
  return (
    <>
    {loading ? (
                <h1>LODING..</h1>
            ) : (
                countries.map((country) => {
                    return <Country key={country.id} {...country} />;
                })
            )}
    </>
  )
}

export default App
