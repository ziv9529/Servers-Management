import express, { Request, Response, NextFunction } from "express"
import { changeServerStatusLogic, getAllServersLogic } from "./businessLogic";
import { isServerInDB } from "./helpers";

const router = express.Router();

router.get("/", getServersHandler);
router.post("/changeStatus/:id", changeServerStatusHandler);

async function getServersHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const servers = await getAllServersLogic();
        res.status(200).json({ message: "ok", servers })
    } catch (error) {
        console.log("getServersHandler error" + error);
        return next(new Error("getServersHandler error" + error));
    };
}
async function changeServerStatusHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const serverId = req?.params?.id;
        if (serverId) {
            const serverInDB = await isServerInDB(serverId);
            if (!serverInDB) {
                return res.status(403).json({ message: `server id ${serverId} is not in DB` })
            } else {
                const result = await changeServerStatusLogic(serverId);
                res.status(200).json({ message: `server id ${serverId} status has chagned successfully` })
            }
        }
    } catch (error) {
        console.log("changeServerStatusHandler error" + error);
        return next(new Error("changeServerStatusHandler error" + error));
    };
}
export default router;

