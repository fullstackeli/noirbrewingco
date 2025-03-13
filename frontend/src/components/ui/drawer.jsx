import * as React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import { CloseButton } from './close-button'; // Assuming you have a custom close button component

export const DrawerContent = React.forwardRef(function DrawerContent(props, ref) {
  const { children, portalled = true, portalRef, offset, ...rest } = props;

  return (
    <Modal
      {...rest}
      ref={ref}
      show={props.show}
      onHide={props.onHide}
      centered
      aria-labelledby="drawer-title"
      className="drawer-modal" // Optional, if you want to apply custom styles
    >
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
});

export const DrawerCloseTrigger = React.forwardRef(function DrawerCloseTrigger(props, ref) {
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

export const DrawerTrigger = ({ children, onClick, ...rest }) => (
  <Button variant="primary" onClick={onClick} {...rest}>
    {children}
  </Button>
);

export const DrawerRoot = React.forwardRef(function DrawerRoot(props, ref) {
  return <div ref={ref} {...props} />;
});

export const DrawerFooter = React.forwardRef(function DrawerFooter(props, ref) {
  return <Modal.Footer ref={ref} {...props} />;
});

export const DrawerHeader = React.forwardRef(function DrawerHeader(props, ref) {
  return <Modal.Header closeButton ref={ref} {...props} />;
});

export const DrawerBody = React.forwardRef(function DrawerBody(props, ref) {
  return <Modal.Body ref={ref} {...props} />;
});

export const DrawerBackdrop = React.forwardRef(function DrawerBackdrop(props, ref) {
  return <Modal.Backdrop ref={ref} {...props} />;
});

export const DrawerDescription = React.forwardRef(function DrawerDescription(props, ref) {
  return <div ref={ref} {...props} />;
});

export const DrawerTitle = React.forwardRef(function DrawerTitle(props, ref) {
  return <Modal.Title ref={ref} {...props} />;
});

export const DrawerActionTrigger = React.forwardRef(function DrawerActionTrigger(props, ref) {
  return <Button ref={ref} {...props} />;
});
