import axios from 'axios';
import moment from 'moment';
import queryString from 'query-string'

export const getCountries = () =>
  axios.get('https://api.covid19api.com/countries');

export const getReportByCountry = (slug) =>
  axios.get(
    `https://api.covid19api.com/dayone/country/${slug}?from=2021-01-01T00:00:00&to=${moment()
      .utc(0)
      .format()}`
  );

export const getMapDataByCountryId = (countryId) =>
  import(
    `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
  );

  const axiosClient = axios.create(
      {
          baseURL: 'https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST?fbclid=IwAR1UCKt-lM0mITqxyalzx-XdQ3cFYX51Il_7kU0X79sS5LDZwdIp7FFPAxg&utm_source=j2team&utm_medium=url_shortener',
          headers: {
              'content-type': 'application.json'
          },
          paramsSerializer: params => queryString.stringify(params),
      }
  )
  
  
  axiosClient.interceptors.request.use(async (config)=>{
      return config;
  })
  
  axiosClient.interceptors.request.use(reponse =>{
      if(reponse && reponse.data){
          return reponse.data
      }
      return reponse
  }, (error)=>{
      throw error;
  });
  
  export default axiosClient;