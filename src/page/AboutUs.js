import { useQuery } from 'react-query';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const AboutUs = () => {
  const [table, setTable] = useState([]);

  const fetchDataHandler = () => {
    fetchTableHandler();
  };

  function fetchTableHandler() {
    fetch('https://httpbin.org/get')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTable(data.headers);

        const tableObject = data.headers;
        for (const property in tableObject) {
          console.log(`${property} : ${tableObject[property]}`);
        }
      });
  }

  return (
    <div>
      <Button color="primary" variant="outlined" onClick={fetchDataHandler}>
        Fetch Table Data
      </Button>
    </div>
  );
};

export default AboutUs;
