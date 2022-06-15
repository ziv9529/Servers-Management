import * as React from 'react';
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

    const { server } = props

    return (
        <Card style={{ border: "1px solid black", margin: "10px" }} sx={{ minWidth: 275 }}>
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
                <Typography variant="h6" component="div">
                    Server Created At:
                    {server.server_created_at}
                </Typography>
            </CardContent>
            <CardActions>
                Server Status : {server.server_status ? "online" : "offline"}
                <Switch checked={!!server.server_status} onChange={() => {
                    changeServerAction(server.server_id);
                    getAllServersAction();
                }} />
            </CardActions>
        </Card>
    )
}

export default ServerCard