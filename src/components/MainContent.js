import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import MyCard from './MyCard';

// const StyledToolbar = styled(Toolbar)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   gap: '20px',
// });

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
});

function ToolbarStyled() {
  const classes = useStyles();
  return <Toolbar className={classes.root}></Toolbar>;
}

const MainContent = () => {
  return (
    <>
      <ToolbarStyled>
        <MyCard />
        <MyCard />
        <MyCard />
      </ToolbarStyled>
    </>
  );
};

export default MainContent;
