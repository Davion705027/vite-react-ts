import * as React from 'react';
import { menu } from '.';

export interface IChatProps {
    contact:menu
}

export default function Chat ({contact}: IChatProps) {
    const [text,setText] = React.useState('')
    const textRef = React.useRef(null)
    const onsubmit = ()=>{
        console.log(textRef.current.value);
        
    }
  return (
    <div>
      <section>
        
        <textarea placeholder={'Chat to' + contact.name} ref={textRef}></textarea>
        <button onClick={onsubmit}>发送给 {contact.email}</button>
      </section>
    </div>
  );
}
