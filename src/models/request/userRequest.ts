//crear un nuevo usuario
export interface IUserRequest {
    lastName: string;
    name: string;
    phone: string;
    typeId: number;
    email: string;
    password: string;
}