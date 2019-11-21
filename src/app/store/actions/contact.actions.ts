import { Action } from '@ngrx/store';
import { Contact } from '../../contact.model';

export enum ContactActionTypes {
  SAVE_CONTACT = '[Contact] Add Contact',
  UPDATE_CURRENT_CONTACT = '[Contact] Update Current Contact'
}

export class SaveContact implements Action {
  readonly type = ContactActionTypes.SAVE_CONTACT;
  constructor(public payload: Contact) { }
}

export class UpdateCurrentContact implements Action {
  readonly type = ContactActionTypes.UPDATE_CURRENT_CONTACT;
  constructor(public payload: any) { }
}

export type ContactActions = SaveContact | UpdateCurrentContact;
