import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { countries } = props;
  const params = useParams();
  const oneCountry = countries.find((item) => item.alpha3Code === params.id);
  console.log(oneCountry);

  return (
    <div className="col-7">
      <h1>{oneCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{oneCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
