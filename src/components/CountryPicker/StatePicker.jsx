import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

// import { fetchCountries } from '../../api';
import { petchCountries } from '../../indianApi/index';


import styles from './CountryPicker.module.css';

// const Countries = ({ handleCountryChange }) => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchAPI = async () => {
//       setCountries(await fetchCountries());
//     };

//     fetchAPI();
//   }, []);

  const Confirmed = ({ handleCountChange }) => {
    const [confirmed, setConfirmed] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setConfirmed(await petchCountries());
      };
  
      fetchAPI();
    }, []);

  return (
    <FormControl className={styles.formControl}>
      {/* <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">United States</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect> */}

      <NativeSelect defaultValue="" onChange={(e) => handleCountChange(e.target.value)}>
        <option value="">India Details</option>
        {confirmed.map((combinedKey, i) => <option key={i} value={combinedKey}>{combinedKey}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Confirmed;