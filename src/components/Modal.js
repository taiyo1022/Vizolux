import React from 'react'
import './Modal.css';

const Modal = ({ onSubmit, onClose, children }) => {
  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-header'>
                <p className='close' onClick={() => onClose()}>&times;</p>
            </div>
            <div className='modal-content'>{children}</div>
            <div className='modal-footer'>
                <button className='btn btn-submit' onClick={() => onSubmit()}>アカウント登録</button>
            </div>
        </div>
    </div>
  )
}

export default Modal