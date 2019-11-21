import { ContactActions, ContactActionTypes } from '../actions/contact.actions';
import { ContactState, initialContactState, contactAdapter } from '../state/contact.state';

export function contactReducer(state: ContactState = initialContactState, action: ContactActions) {
  switch (action.type) {
    case ContactActionTypes.SAVE_CONTACT:
      return contactAdapter.upsertOne(action.payload, state);
    default:
      return state;
  }
}
