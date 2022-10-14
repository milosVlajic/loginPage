import { useQuery } from 'react-query';
import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const AboutUs = () => {
  const [table, setTable] = useState([]);

  const fetchDataHandler = () => {
    fetchTableHandler();
  };

  const columns = [
    { filed: 'name', headerName: 'Name' },
    { field: 'value', headerName: 'Value' },
  ];

  let rows = [];

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
          rows = [`${property}, ${tableObject[property]}`];
        }
      });
  }
  console.log(rows);

  return (
    <div>
      <Button color="primary" variant="outlined" onClick={fetchDataHandler}>
        Fetch Table Data
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AboutUs;
