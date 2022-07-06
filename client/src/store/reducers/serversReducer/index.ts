import { ACTIONS } from "../../actions";

export interface IServersState {
  servers: Array<IServer>
}
export interface IServer {
  server_id: number,
  server_name: string,
  server_ip: string,
  server_company_id: number,
  server_status: number,
  server_created_at: string,
  company_id: number,
  company_name: string
}
const initialState = {
  servers: [],
};


export const serversReducer = (
  state: IServersState = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ACTIONS.SERVERS.GET_ALL: {
      return { ...state, servers: action.payload };
    }
    case ACTIONS.SERVERS.FILTER.DATE: {
      let filteredServers = state.servers.sort(function (a, b) {
        return Date.parse(a?.server_created_at) - Date.parse(b?.server_created_at);
      })
      return { ...state, servers: filteredServers };
    }
    case ACTIONS.SERVERS.FILTER.ACTIVE: {
      let filteredServers = state.servers.filter((server: IServer) => server.server_status === 1)
      return { ...state, servers: filteredServers };
    }
    default:
      return state;
  }
};
