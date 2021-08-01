import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api/index';
// import { fetchCountries } from '../../indianApi';


import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  // const Confirmed = ({ handleCountryChange }) => {
  //   const [confirmed, setConfirmed] = useState([]);
  
  //   useEffect(() => {
  //     const fetchAPI = async () => {
  //       setConfirmed(await fetchCountries());
  //     };
  
  //     fetchAPI();
  //   }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="" style={{backgroundColor:"rgb(220 255 246)"}} >Select Country</option>
        {countries.map((country, i) => <option style={{backgroundColor:"rgb(220 255 246)"}} key={i} value={country}>{country}</option>)}
      </NativeSelect>

      {/* <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">India Details</option>
        {confirmed.map((combinedKey, i) => <option key={i} value={combinedKey}>{combinedKey}</option>)}
      </NativeSelect> */}
    </FormControl>
  );
};

export default Countries;
