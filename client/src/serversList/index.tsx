import React from "react";
// import { IServersState } from "../store/reducers/serversReducer";
import ServerCard from "./ServerCard";
import Box, { BoxProps } from '@mui/material/Box';

function ServersList(props: { servers: any, isActiveFiltered: any, isFilteredByDate: any }) {
    const { servers, isActiveFiltered, isFilteredByDate } = props;
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 2,
                    m: 2,
                }}
            >
                {isFilteredByDate ?
                    servers?.sort(function (a: any, b: any) {
                        //@ts-ignore
                        return new Date(a.server_created_at) - new Date(b.server_created_at)
                    }).map((s: any, index: number) => {
                        return <ServerCard server={s} key={index} />
                    })
                    : servers?.map((s: any, index: number) => {
                        return <ServerCard server={s} key={index} />
                    })}
            </Box>


        </div>
    )
}
export default ServersList