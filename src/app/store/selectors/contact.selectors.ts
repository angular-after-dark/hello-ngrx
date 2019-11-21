import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { contactAdapter } from '../state/contact.state';

export const selectCurrentContact = (state: AppState) => state.currentContact;

const selectContacts = (state: AppState) => state.contacts;

const cotactSelectors = contactAdapter.getSelectors();

export const selectAllContacts = createSelector(
  selectContacts,
  cotactSelectors.selectAll
);
