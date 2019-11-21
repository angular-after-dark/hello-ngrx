import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../contact.model';
import { UpdateCurrentContact } from '../store/actions/contact.actions';
import { selectAllContacts } from '../store/selectors/contact.selectors';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  constructor(private readonly store: Store<AppState>) { }

  select(contact: Contact) {
    this.store.dispatch(new UpdateCurrentContact(contact));
  }

  ngOnInit() {
    this.contacts$ = this.store.select(selectAllContacts);
  }

}
