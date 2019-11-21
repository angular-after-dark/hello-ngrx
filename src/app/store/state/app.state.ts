import { Contact } from 'src/app/contact.model';
import { ContactState, initialContactState } from './contact.state';

export interface AppState {
  contacts: ContactState;
  currentContact?: Contact;
}

export const initialAppState: AppState = {
  contacts: initialContactState
};
