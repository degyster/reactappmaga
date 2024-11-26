import { forwardRef } from 'react';
import s from './input.module.css';

const Input = forwardRef((props, ref) => {
  
  return (
    <input ref={ref} {...props} placeholder= {props.name} className={s.Registration_field}/>
      );
}) 

export default Input