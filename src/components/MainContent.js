import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import MyCard from './MyCard';

const useStyles = makeStyles({
  tool: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
});

const MainContent = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classes.tool}>
        <MyCard />
        <MyCard />
        <MyCard />
      </Toolbar>
    </>
  );
};

export default MainContent;
