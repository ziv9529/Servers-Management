import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ServersList from './serversList';
import { getAllServersAction } from './store/asyncFunction';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import { AppBar, Grid, Grow, Typography } from '@mui/material';
import { StyledAppBar } from './styles';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {


  return (

    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Servers Management</Typography>
      </StyledAppBar>
      <Container>
        <ServersList />
      </Container>
    </Container>

  );
}

export default App;