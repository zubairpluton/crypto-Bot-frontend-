import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

export default function AddUser({show,handleClose}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered className='custom-modal'>
        <Modal.Header>
          <Modal.Title>Add User</Modal.Title>
          <div className="close-btn" onClick={handleClose}>
          <i class="fa-solid fa-xmark"></i>
          </div>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" className='custom-input' placeholder="Input User Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" className='custom-input' placeholder="Email Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Control type="password" className='custom-input' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mt-5 text-center" controlId="password">
                <button className="custom-btn primary-btn round-btn">Done</button>
            </Form.Group>
            </Form>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
