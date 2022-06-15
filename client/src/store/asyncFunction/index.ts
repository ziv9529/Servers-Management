import { store } from "../index";
import { ACTIONS } from "../actions";
import { changeServerStatusService, getAllServersService } from "../services";

function getDispatchStore() {
    return store.dispatch;
}

export async function getAllServersAction() {
    const dispatch = getDispatchStore();
    try {
        const result = await getAllServersService();
        dispatch(getAllServersSuccess(result))
    } catch (error) {
        console.log("getAllServersAction error " + error);
    }
}
function getAllServersSuccess(payload: any) {
    return { type: ACTIONS.SERVERS.GET_ALL, payload };
}

export async function changeServerAction(serverId:any) {
    const dispatch = getDispatchStore();
    try {
        const result = await changeServerStatusService(serverId);
        console.log("resultresultresult");
        console.log(result);
        console.log("resultresultresult");
    } catch (error) {
        console.log("getAllServersAction error " + error);
    }
}
export async function filterServersByDate(serverId:any) {
    const dispatch = getDispatchStore();
    try {
        // const result = await changeServerStatusService(serverId);
    } catch (error) {
        console.log("getAllServersAction error " + error);
    }
}
