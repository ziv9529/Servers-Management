"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerInDBQuery = exports.changeServerStatusQuery = exports.getAllServersDateFilteredQuery = exports.getAllServersQuery = void 0;
function getAllServersQuery() {
    return `SELECT * FROM servers.servers_table st JOIN servers_companies sc ON st.server_company_id = sc.company_id;`;
}
exports.getAllServersQuery = getAllServersQuery;
function getAllServersDateFilteredQuery() {
    return `SELECT * FROM servers.servers_table st JOIN servers_companies sc ON st.server_company_id = sc.company_id ORDER BY st.server_created_at DESC;`;
}
exports.getAllServersDateFilteredQuery = getAllServersDateFilteredQuery;
function changeServerStatusQuery() {
    return `UPDATE servers.servers_table SET server_status = NOT server_status WHERE server_id = ?;`;
}
exports.changeServerStatusQuery = changeServerStatusQuery;
function isServerInDBQuery() {
    return `SELECT * FROM servers.servers_table WHERE server_id = ?;`;
}
exports.isServerInDBQuery = isServerInDBQuery;
