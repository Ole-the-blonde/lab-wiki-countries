import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJson from './countries.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJson);
  console.log(countries);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}></CountriesList>
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
