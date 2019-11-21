import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { contactReducer } from './contact.reducer';
import { currentContactReducer } from './current-contact.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  contacts: contactReducer,
  currentContact: currentContactReducer
};
