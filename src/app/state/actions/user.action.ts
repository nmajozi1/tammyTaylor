import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/interfaces/user.interface';

export const login = createAction(
    '[Login Form Component] Login',
    props<{ username: string, password: string, TableName: string }>()
);

export const LoginComplete = createAction(
    '[Login API] User Login Success'
);

export const Register = createAction(
    '[Register Form Component] Register',
    props<{ 
        TableName: string,
        Item: IUser
    }>()
);

export const RegisterComplete = createAction(
    '[Register API] User Register Success'
);

