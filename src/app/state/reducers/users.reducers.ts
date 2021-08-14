import { createReducer, on, Action } from '@ngrx/store';
import { IUser } from 'src/app/interfaces/user.interface';
import { 
  login,
  LoginComplete,
  Register,
  RegisterComplete,
} from '../actions/user.action';

export const initialState: ReadonlyArray<any> = [];

export const userReducer = createReducer(
  initialState,
  on(login, (state, userData: IUser) => {
      if (state.indexOf(userData.username) > -1) return state;

      return [...state, userData]
  }),
  on(LoginComplete, (state, payload) => {
      return [...state, payload]
  }),
  on(Register, (state, regData) => {
    if (state.indexOf(regData.TableName) > -1) return state;

    return [...state, regData]
  }),
  on(RegisterComplete, (state, payload) => {
    return [...state, payload]
  }),
);