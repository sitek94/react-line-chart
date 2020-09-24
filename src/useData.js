import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/week_temperature_sf.csv/';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.temperature = +d.temperature;
      d.timestamp = new Date(d.timestamp);

      return d;
    }
    csv(csvUrl, row).then(setData);
  }, []);
  console.log(data);
  
  return data;
}