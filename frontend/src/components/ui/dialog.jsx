import * as React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import { CloseButton } from './close-button'; // Assuming you have a custom close button component

export const DialogContent = React.forwardRef(function DialogContent(props, ref) {
  const { children, portalled = true, portalRef, backdrop = true, ...rest } = props;

  return (
    <Modal
      {...rest}
      ref={ref}
      show={props.show}
      onHide={props.onHide}
      centered
      aria-labelledby="dialog-title"
      className="dialog-modal" // Optional, if you want to apply custom styles
      backdrop={backdrop ? 'static' : false}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
});

export const DialogCloseTrigger = React.forwardRef(function DialogCloseTrigger(props, ref) {
  return (
    <Button
      variant="link"
      style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      onClick={props.onClose}
      ref={ref}
    >
      <CloseButton size="sm" />
    </Button>
  );
});

export const DialogRoot = React.forwardRef(function DialogRoot(props, ref) {
  return <div ref={ref} {...props} />;
});

export const DialogFooter = React.forwardRef(function DialogFooter(props, ref) {
  return <Modal.Footer ref={ref} {...props} />;
});

export const DialogHeader = React.forwardRef(function DialogHeader(props, ref) {
  return <Modal.Header closeButton ref={ref} {...props} />;
});

export const DialogBody = React.forwardRef(function DialogBody(props, ref) {
  return <Modal.Body ref={ref} {...props} />;
});

export const DialogBackdrop = React.forwardRef(function DialogBackdrop(props, ref) {
  return <Modal.Backdrop ref={ref} {...props} />;
});

export const DialogTitle = React.forwardRef(function DialogTitle(props, ref) {
  return <Modal.Title ref={ref} {...props} />;
});

export const DialogDescription = React.forwardRef(function DialogDescription(props, ref) {
  return <div ref={ref} {...props} />;
});

export const DialogTrigger = React.forwardRef(function DialogTrigger(props, ref) {
  return (
    <Button variant="primary" onClick={props.onClick} {...props} ref={ref}>
      {props.children}
    </Button>
  );
});

export const DialogActionTrigger = React.forwardRef(function DialogActionTrigger(props, ref) {
  return <Button ref={ref} {...props} />;
});
