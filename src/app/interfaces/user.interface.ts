export interface IUser {
    name?: string;
    surname?: string;
    username: string;
    email?: string;
    password: string;
    TableName: string;
    retype?: string;
    role?: string;
}