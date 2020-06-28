import React from 'react';
import './Modal.css';

const Modal = ({isOpen, children}) => {

    if(isOpen){
      return (
            <div className="modalOverlay">
              <div className="modalWindow">
                {children}
              </div>
            </div>
          )
        }else {
          return(null);
        }
  };

  export default Modal;
