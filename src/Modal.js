import React from 'react'
import './Modal.css';

const Modal = ({open}) => {
    if(!open) return null;
  return (
    <div className='overlay'>hello</div>
  )
}

export default Modal