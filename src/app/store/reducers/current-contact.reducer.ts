import { Contact } from 'src/app/contact.model';
import { ContactActions, ContactActionTypes } from '../actions/contact.actions';

export function currentContactReducer(state: Contact, action: ContactActions) {
  if (action.type === ContactActionTypes.UPDATE_CURRENT_CONTACT) {
    return action.payload;
  }
}
