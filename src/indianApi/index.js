import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const petchData = async (combinedKey) => {
  let changeableUrl = url;

  if (combinedKey) {
    changeableUrl = `${url}/confirmed/${combinedKey}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
// };

// Instead of Global, it fetches the daily data for the US
export const petchDailyData = async () => {
    try {
      const { data } = await axios.get('https://covid19.mathdro.id/api/confirmed');
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };

export const petchCountries = async () => {
  try {
    const { data: { confirmed } } = await axios.get(`${url}/confirmed`);

    return confirmed.map((combinedKey) => combinedKey.name);
  } catch (error) {
    return error;
  }
};