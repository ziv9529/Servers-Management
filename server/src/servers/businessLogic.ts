import { getConnection } from "../db";
import { changeServerStatusQuery, getAllServersQuery } from "./queries";

export async function getAllServersLogic() {
    try {
        const query = getAllServersQuery();
        const [result] = await getConnection().query(query);
        return result
    } catch (error) {
        console.log("getAllServersLogic error" + error);
    }
}
export async function changeServerStatusLogic(serverId: any) {
    try {
        const query = changeServerStatusQuery();
        const [result] = await getConnection().execute(query, [serverId]);
        return result
    } catch (error) {
        console.log("changeServerStatusLogic error" + error);
    }
}