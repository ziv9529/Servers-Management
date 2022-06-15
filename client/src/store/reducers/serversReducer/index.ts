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
  servers:[],
};


export const serversReducer = (
  state: IServersState = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ACTIONS.SERVERS.GET_ALL: {
      return { ...state, servers: action.payload };
    }
    default:
      return state;
  }
};
