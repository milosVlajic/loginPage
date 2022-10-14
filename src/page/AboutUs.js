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

let tableArray = [];

const AboutUs = () => {
  const [table, setTable] = useState([]);
  const [rows, setRows] = useState([]);

  // const rows = [
  //   { name: 1, value: 3 },
  //   { name: 2, value: 4 },
  // ];

  const fetchDataHandler = () => {
    fetchTableHandler();
  };

  const createData = (name, value) => {
    return { name, value };
  };

  const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'value', headerName: 'Value' },
  ];

  function fetchTableHandler() {
    fetch('https://httpbin.org/get')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTable(data.headers);

        const tableObject = data.headers;
        for (const property in tableObject) {
          tableArray.push(
            createData(`${property}`, `${tableObject[property]}`)
          );
          console.log(tableArray);
          // console.log(`${property} : ${tableObject[property]}`);
          setRows(tableArray);
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

          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AboutUs;
