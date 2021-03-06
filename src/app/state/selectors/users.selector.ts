import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/users.reducers';

export const selectUserFeature = createFeatureSelector<State>(
    'name'
);

export const selelectUser = createSelector(
    selectUserFeature,
    (state: State) => state.user
)

/* 
import { createSelector } from '@ngrx/store';

export interface User {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  userId: number;
  name: string;
}

export interface AppState {
  selectedUser: User;
  allBooks: Book[];
}

export const selectUser = (state: AppState) => state.selectedUser;
export const selectAllBooks = (state: AppState) => state.allBooks;

export const selectVisibleBooks = createSelector(
  selectUser,
  selectAllBooks,
  (selectedUser: User, allBooks: Book[]) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: Book) => book.userId === selectedUser.id);
    } else {
      return allBooks;
    }
  }
);
*/
