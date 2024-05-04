import { IUserResponse } from "./userResponse";

export interface ICommentResponse{
    incidentID: number,
    userId: number,
    content: string,
    user:IUserResponse;
}