import { useQuery } from 'react-query';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Footer from '../components/Footer';

const fetchTableData = () => {
  return fetch('https://httpbin.org/get').then(response => response.json());
};

const AboutUs = () => {
  const [table, setTable] = useState([]);
  const [rows, setRows] = useState([]);

  const createData = (name, value) => {
    return { name, value };
  };

  const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'value', headerName: 'Value' },
  ];

  const { isLoading, data } = useQuery('table-data', fetchTableData);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  // console.log(data.headers);

  let tableArray = [];
  const tableObject = data.headers;
  for (const property in tableObject) {
    tableArray.push(createData(`${property}`, `${tableObject[property]}`));
    console.log(tableArray);
    // console.log(`${property} : ${tableObject[property]}`);
  }
  setRows(tableArray);

  console.log(tableArray);

  return <div>About Us</div>;
};
export default AboutUs;

// const AboutUs = () => {
//   const [table, setTable] = useState([]);
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [tableData, setTableData] = useState(false);

//   // const rows = [
//   //   { name: 1, value: 3 },
//   //   { name: 2, value: 4 },
//   // ];

//   const fetchDataHandler = () => {
//     fetchTableHandler();
//   };

//   const createData = (name, value) => {
//     return { name, value };
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name' },
//     { field: 'value', headerName: 'Value' },
//   ];

//   function fetchTableHandler() {
//     setLoading(true);
//     fetch('https://httpbin.org/get')
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         setTable(data.headers);

//         let tableArray = [];
//         const tableObject = data.headers;
//         for (const property in tableObject) {
//           tableArray.push(
//             createData(`${property}`, `${tableObject[property]}`)
//           );
//           console.log(tableArray);
//           // console.log(`${property} : ${tableObject[property]}`);
//         }
//         setRows(tableArray);
//         setLoading(false);
//         setTableData(true);
//       });
//   }

//   console.log(rows);

//   return (
//     <div>
//       {tableData || (
//         <Button color="primary" variant="outlined" onClick={fetchDataHandler}>
//           Fetch Table Data
//         </Button>
//       )}
//       {loading && <CircularProgress color="secondary" />}

//       {tableData || <p>No items found</p>}

//       {tableData && (
//         <TableContainer component={Paper}>
//           <Table aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Value</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {rows.map(row => (
//                 <TableRow key={row.name}>
//                   <TableCell align="right">{row.name}</TableCell>
//                   <TableCell align="right">{row.value}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default AboutUs;
