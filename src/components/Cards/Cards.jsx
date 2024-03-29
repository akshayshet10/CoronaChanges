import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Stay Aleart... Control Virus';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h3" component="h1">World Wide Corona Report</Typography>
        <br /><br />
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Confirmed"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
        
      </Grid>
    </div>
  );
};

export default Info;
