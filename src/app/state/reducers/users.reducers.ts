import { createReducer, on, Action } from '@ngrx/store';
import { IRegister } from 'src/app/interfaces/register.interface';
import { ILoginResponse, IUser } from 'src/app/interfaces/user.interface';
import { 
  login,
  LoginComplete,
  Register,
  RegisterComplete,
} from '../actions/user.action';

export interface State {
  user: IUser | ILoginResponse
}

export const initialState: ReadonlyArray<State> = [];

export const userReducer = createReducer(
  initialState,
  on(login, (state, userData: any) => {
      if (state.indexOf(userData.username) > -1) return state;

      return [...state, userData]
  }),
  on(LoginComplete, (state, payload: any) => {
      return [...state, payload]
  }),
  on(Register, (state, regData: any) => {
    if (state.indexOf(regData.TableName) > -1) return state;

    return [...state, regData]
  }),
  on(RegisterComplete, (state, payload: any) => {
    return [...state, payload]
  }),
);