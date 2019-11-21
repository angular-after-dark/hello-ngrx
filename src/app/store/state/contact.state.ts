import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Contact } from '../../contact.model';

export interface ContactState extends EntityState<Contact> { }
export const contactAdapter: EntityAdapter<Contact> = createEntityAdapter<Contact>({});
export const initialContactState: ContactState = contactAdapter.getInitialState({});
