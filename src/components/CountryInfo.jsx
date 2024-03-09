import React, { useState, useEffect } from 'react';

const CountryInfo = () => {
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    fetchCountriesData();
  }, []);

  if (!countriesData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Country Information</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {countriesData.map(country => (
            <tr key={country.cca3}>
              <td>{country.name.official}</td>
              <td>{country.ccn3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryInfo;
