export function getAllServersQuery(): string {
    return `SELECT * FROM servers.servers_table st JOIN servers_companies sc ON st.server_company_id = sc.company_id;`
}
export function getAllServersDateFilteredQuery(): string {
    return `SELECT * FROM servers.servers_table st JOIN servers.servers_companies sc ON st.server_company_id = sc.company_id ORDER BY st.server_created_at DESC;
    `
}
export function getAllActiveServersFilteredQuery(): string {
    return `SELECT * FROM servers.servers_table st JOIN servers.servers_companies sc ON st.server_company_id = sc.company_id WHERE st.server_status = 1;
    `
}
export function changeServerStatusQuery(): string {
    return `UPDATE servers.servers_table SET server_status = NOT server_status WHERE server_id = ?;`
}
export function isServerInDBQuery(): string {
    return `SELECT * FROM servers.servers_table WHERE server_id = ?;`
}