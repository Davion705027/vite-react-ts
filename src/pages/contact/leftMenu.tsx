import * as React from 'react';
import { menu } from '.';

export interface ILeftMenuProps {
    contacts: menu[],
    onSelect: (contact: menu) => void,
}

export default function LeftMenu ({contacts,onSelect}: ILeftMenuProps) {
  return (
    <section>
    <ul>
        {
            contacts.map(contact=>
                <li key={contact.email} onClick={()=>onSelect(contact)}>{contact.name}</li>
            )
        }
    </ul>
  </section>
  );
}
