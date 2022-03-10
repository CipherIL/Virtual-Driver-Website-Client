import { IUser } from "../contexts/user.context";

export interface IServerResponse {
    status: number;
    data: IUser | string;
} 