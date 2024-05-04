import { IUserResponse } from "./userResponse";

export interface IincidentResponse{
    subject:string;
    imageUrl:string;
    type:string;
    details:string;
    status:string;
    createAt:string;
    updateAt:string;
    incidentId:string;
    
    user:IUserResponse;
}