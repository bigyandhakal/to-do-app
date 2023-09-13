import React, { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";

function BasicExample({showToast, title, msg}) {
  const [show, setShow] = useState(showToast);
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{title || "Header"}</strong>
        </Toast.Header>
        <Toast.Body>{msg || "Body"}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default BasicExample;
