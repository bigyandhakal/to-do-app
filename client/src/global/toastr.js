import React from 'react';
import { Toast, ToastContainer } from "react-bootstrap";
import { useToastContext } from '../contexts/ToastContext';

function Toastr() {
  const {show, setShow, toastMsg} = useToastContext();
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{toastMsg.title || "Header"}</strong>
        </Toast.Header>
        <Toast.Body>{toastMsg.msg || "Body"}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toastr;
