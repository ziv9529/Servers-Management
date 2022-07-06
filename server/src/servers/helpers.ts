import e from "express";
import { getConnection } from "../db";
import { isServerInDBQuery } from "./queries";

export async function isServerInDB(serverId: any) {
    try {
        const query = isServerInDBQuery();
        const [result] = await getConnection().execute(query, [serverId]);
        if (result.length === 0) return false
        else return true
    } catch (error) {
        console.log("isServerInDB error" + error);
        return false
    }
}