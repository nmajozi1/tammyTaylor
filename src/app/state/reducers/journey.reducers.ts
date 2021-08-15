import { createReducer, on, Action } from '@ngrx/store';
import { 
  CustomerType,
  CustomerTypeCompleted,
} from '../actions/journey.action';

export const initialState: ReadonlyArray<any> = [];

export const journeyReducer = createReducer(
  initialState,
  on(CustomerType, (state, customerType) => {
      if (state.indexOf(customerType.type) > -1) return state;

      return [...state, customerType];
  }),
  on(CustomerTypeCompleted, (state, payload) => {
      return [...state, payload];
  }),
);