import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  return (
    <div
      className="col-5"
      style={{
        maxHeight: '90vh',
        overflow: 'scroll',
      }}
    >
      <div className="list-group">
        {countries.map((item) => (
          <Link
            to={item.alpha3Code}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            {item.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
