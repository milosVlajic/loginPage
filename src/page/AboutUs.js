import { useQuery } from 'react-query';
import React, { useState } from 'react';

const AboutUs = () => {
  const [table, setTable] = useState([]);

  function fetchTableHandler() {
    fetch('https://httpbin.org/get')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTable(data.results);
        console.log(data.results);
      });
  }
  fetchTableHandler();
  return <div>AboutUs</div>;
};

export default AboutUs;
