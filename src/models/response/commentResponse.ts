import { IUserResponse } from "./userResponse";

export interface ICommentResponse{
    commentId:number,
    incidentID: number,
    userId: number,
    content: string,
    user:IUserResponse;
}