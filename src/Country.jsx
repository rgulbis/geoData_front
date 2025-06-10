function Country(country) {
    return (    
        <>
            <li>{country.name}</li>
            <ul>
                <li>Cilvēki - {country.population}</li>
                <li>Platība (km2) - {country.area_km2}</li>
            </ul>
        </>    
    )
}
export default Country