"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const businessLogic_1 = require("./businessLogic");
const helpers_1 = require("./helpers");
const router = express_1.default.Router();
router.get("/", getServersHandler);
router.post("/changeStatus/:id", changeServerStatusHandler);
function getServersHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const servers = yield (0, businessLogic_1.getAllServersLogic)();
            res.status(200).json({ message: "ok", servers });
        }
        catch (error) {
            console.log("getServersHandler error" + error);
            return next(new Error("getServersHandler error" + error));
        }
        ;
    });
}
function changeServerStatusHandler(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const serverId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            if (serverId) {
                const serverInDB = yield (0, helpers_1.isServerInDB)(serverId);
                if (!serverInDB) {
                    return res.status(403).json({ message: `server id ${serverId} is not in DB` });
                }
                else {
                    const result = yield (0, businessLogic_1.changeServerStatusLogic)(serverId);
                    res.status(200).json({ message: `server id ${serverId} status has chagned successfully` });
                }
            }
        }
        catch (error) {
            console.log("changeServerStatusHandler error" + error);
            return next(new Error("changeServerStatusHandler error" + error));
        }
        ;
    });
}
exports.default = router;
