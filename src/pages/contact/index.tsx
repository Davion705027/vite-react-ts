import { Card } from 'antd';
import * as React from 'react';
import LeftMenu from './leftMenu';
import { useState } from 'react';
import  Chat  from './chat';

export interface IContactProps {
}

export function Contact (props: IContactProps) {
    const [to,setTo] = useState<menu>(contacts[0])
  return (
    <Card>
      Contact
      <LeftMenu contacts={contacts} onSelect={contact=>setTo(contact)}></LeftMenu>  
      选择了： {to.email} 
      <Chat contact={to}></Chat>
    </Card>
  );
}


export interface menu{
    name:string,
    email:string
}

const contacts:menu[] = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
  ];