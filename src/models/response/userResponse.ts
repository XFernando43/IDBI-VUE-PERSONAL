import { userTypeResponse } from "./userTypeResponse";

export interface IUserResponse {
    lastName: string;
    name: string;
    phone: string;
    userId:number;
    userType: userTypeResponse;

}