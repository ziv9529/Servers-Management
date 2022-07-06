import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { margin } from "@mui/system";
import { changeServerAction, getAllServersAction } from "../../store/asyncFunction";
import { IServer, IServersState } from "../../store/reducers/serversReducer"
// {server.server_name}
function ServerCard(props: { server: IServer }) {

    const [isServerActionChanged, setIsServerActionChanged] = useState(false)

    useEffect(() => {
        getAllServersAction()
    }, [isServerActionChanged])

    const { server } = props

    return (
        <Card sx={{ maxWidth: 345 }} style={{ border: "solid 1px black" }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    Server Name: {server.server_name}
                </Typography>
                <Typography variant="h6" component="div">
                    Server Company: {server.company_name}
                </Typography>
                <Typography variant="h6" component="div">
                    Server IP: {server.server_ip}
                </Typography>
                <Typography variant="subtitle2" component="div">
                    Server Created At:
                    {getDate(server.server_created_at)}
                </Typography>
            </CardContent>
            <CardActions>
                Server Status : {server.server_status ? "online" : "offline"}
                <Switch checked={!!server.server_status} onChange={() => {
                    changeServerAction(server.server_id);
                    setIsServerActionChanged(!isServerActionChanged)
                }} />
            </CardActions>
        </Card>
    )
}

function getDate(dateLongString: string): string {
    const myDate = new Date(dateLongString)
    return ` ${myDate.toLocaleString()}`
}

export default ServerCard