import axios from "axios";

const url = `http://localhost:3001/servers`;

export async function getAllServersService() {
    const { data } = await axios.get(url);
    return data.servers
}
export async function changeServerStatusService(serverId: any) {
    const { data } = await axios.post(`${url}/changeStatus/${serverId}`);
    return data
}