export interface IUser {
    name?: string;
    surname?: string;
    username: string;
    email?: string;
    password: string;
    TableName: string;
    retype?: string;
    role?: string;
};

export interface ILoginResponse {
    type: string;
    payload: IPayload;
};

export interface IPayload {
    success: Boolean,
    message: string,
    data: IUser,
};