import React from 'react';
import s from './ButtonUniversal.module.css';

const ButtonUniversal = ({ title, color, textColor, isDisabled, onClick, isAdded, type, size }) => {
  const buttonClass = color === 'green' ? `${s.button} ${s.green}` : s.button;
  const addedClass = isAdded && `${s.sended}`;
  const getSizeStyles = () => {
    if (size === 'big') {
      return {
        width: '150px',
        height: '50px',
      };
    }
    return {
      width: '200px',
      height: '50px',
    };
  };

  return (
    <button
      className={`${buttonClass} ${type === 'disc' ? addedClass : ''} ${title === 'Request submitted' || type === 'The Order is Placed' ? s.sended : ''}`}
      onClick={onClick}
      disabled={isAdded ? true : false}
      style={{
        color: isAdded ? 'rgba(40, 40, 40, 1)' : textColor,
        border: isAdded && '1px solid rgba(40, 40, 40, 1)',
        ...getSizeStyles(),
      }}
    >
      {title}
    </button>
  );
};

export default ButtonUniversal;
