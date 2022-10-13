import { useQuery } from 'react-query';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const AboutUs = () => {
  const [table, setTable] = useState([]);

  const fetchDataHandler = () => {
    getdata();
  };

  const getdata = async () => {
    const url = 'https://httpbin.org/get';

    const response = await fetch(url);
    const { headers } = await response.json();
    console.log(headers);

    headers.map(headers => {
      console.log(headers);
    });
  };

  //   function fetchTableHandler() {

  //     fetch('https://httpbin.org/get')
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(data => {
  //         setTable(data.headers);
  //         console.log(data.headers);
  //       });
  //   }

  return (
    <div>
      <Button color="primary" variant="outlined" onClick={fetchDataHandler}>
        Fetch Table Data
      </Button>
    </div>
  );
};

export default AboutUs;
