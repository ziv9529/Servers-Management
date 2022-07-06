import React, { useEffect, useState } from "react";
// import { IServersState } from "../store/reducers/serversReducer";
import ServerCard from "./ServerCard";
import Box, { BoxProps } from '@mui/material/Box';
import { Button, Checkbox, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllServersAction } from "../store/asyncFunction";
import { ACTIONS } from "../store/actions";
import { store } from "../store";
import { IServer, IServersState } from "../store/reducers/serversReducer";
import { StyledTypography } from "../styles";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ServersList() {

    // const { servers } = props;
    const servers = useSelector((state: any) => state?.serversReducer?.servers);

    const [activeFilterChecked, setActiveFilterChecked] = useState(false);
    const [dateFilterChecked, setDateFilterChecked] = useState(false);

    useEffect(() => {
        getAllServersAction();
    }, []);

    const handleDateFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const dispatch = getDispatchStore();
        if (event.target.checked) {
            dispatch({ type: ACTIONS.SERVERS.FILTER.DATE })
        } else {
            getAllServersAction();
        }
        setDateFilterChecked(event.target.checked);
    };
    const handleActiveFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const dispatch = getDispatchStore();
        if (event.target.checked) {
            dispatch({ type: ACTIONS.SERVERS.FILTER.ACTIVE })
        } else {
            getAllServersAction();
        }
        setActiveFilterChecked(event.target.checked);
    };

    function getDispatchStore() {
        return store.dispatch;
    }

    return (
        <div>

            <StyledTypography variant="subtitle2" align="left">
                Filter by server created time
                <Checkbox {...label} checked={dateFilterChecked} onChange={handleDateFilterChange} />
            </StyledTypography>

            <StyledTypography variant="subtitle2" align="left">
                Filter only active servers
                <Checkbox {...label} checked={activeFilterChecked} onChange={handleActiveFilterChange} />
            </StyledTypography>
            <Grid container spacing={4}>
                {servers?.map((s: IServer, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} key={index.toString()} >
                            <ServerCard server={s} />
                        </Grid>
                    )
                })}
            </Grid >
        </div>


    )
}

export default ServersList