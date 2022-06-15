import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ServersList from './serversList';
import { getAllServersAction } from './store/asyncFunction';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {
  const serversState = useSelector((state: any) => state?.serversReducer?.servers);
  const [isFilteredByDate, setIsFilteredByDate] = useState(false);
  const [isFilteredByActiveServers, setIsFilteredByActiveServers] = useState(false);

  useEffect(() => {
    getAllServersAction();
  }, []);
  useEffect(() => {
    getAllServersAction();
  }, [isFilteredByDate]);
  // useEffect(() => {
  //   getAllServersAction();
  // }, [isFilteredByActiveServers]);

  return (
    <div className='container'>
      <Container maxWidth="lg">
        <h1>
          Servers Management
        </h1>
        <h2>
          welcome to my site, here you can manage your servers!
        </h2>
        <h3>
          filter by: Date <Checkbox checked={isFilteredByDate} onChange={(e: any) => {
            setIsFilteredByDate(!isFilteredByDate)
          }} {...label} />
        </h3>
        <h3>
          filter by: Only Active Servers <Checkbox checked={isFilteredByActiveServers} onChange={(e: any) => {
            setIsFilteredByActiveServers(!isFilteredByActiveServers)
          }} {...label} />
        </h3>
        <ServersList servers={serversState} isActiveFiltered={isFilteredByActiveServers} isFilteredByDate={isFilteredByDate} />
      </Container>
    </div>
  );
}

export default App;
