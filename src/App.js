import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
// import { StatePicker } from './components/CountryPicker/StatePicker';
import { fetchData } from './api/index';
// import { petchData } from './indianApi/index'
import styles from './App.module.css';
import { Fragment } from 'react';

// import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <Fragment>
      <div className={styles.container}>
        {/* <h1 className={styles}>Corona</h1> */}
        <img  src="https://cdn.pixabay.com/photo/2020/09/02/13/04/virus-5538240_960_720.png" height="100px" width="100px" alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {/* <StatePicker handleCountChange={this.handleCountChange}/> */}
        <Chart data={data} country={country} /> 
     

      </div>
         <div style={{backgroundColor:"rgb(5 74 77 / 61%)",width:"100%",textAlign:"center",color:"rgb(233 247 251)"}}>
         <h4>Akshay Shet G @2021</h4>
       </div>
       </Fragment>
    );
  }
}

export default App;