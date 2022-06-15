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
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeServerStatusLogic = exports.getAllServersLogic = void 0;
const db_1 = require("../db");
const queries_1 = require("./queries");
function getAllServersLogic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = (0, queries_1.getAllServersQuery)();
            const [result] = yield (0, db_1.getConnection)().query(query);
            return result;
        }
        catch (error) {
            console.log("getAllServersLogic error" + error);
        }
    });
}
exports.getAllServersLogic = getAllServersLogic;
function changeServerStatusLogic(serverId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = (0, queries_1.changeServerStatusQuery)();
            const [result] = yield (0, db_1.getConnection)().execute(query, [serverId]);
            return result;
        }
        catch (error) {
            console.log("changeServerStatusLogic error" + error);
        }
    });
}
exports.changeServerStatusLogic = changeServerStatusLogic;
