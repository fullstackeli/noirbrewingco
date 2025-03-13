import * as React from 'react';
import { Popover as BootstrapPopover, OverlayTrigger, CloseButton } from 'react-bootstrap'; // Import from react-bootstrap

export const PopoverContent = React.forwardRef(function PopoverContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <OverlayTrigger
      {...rest}
      overlay={
        <BootstrapPopover id="popover-content" {...rest} ref={ref}>
          {props.children}
        </BootstrapPopover>
      }
      placement="top" // Customize the placement if needed (e.g., "bottom", "left", "right")
    >
      <div>{props.children}</div>
    </OverlayTrigger>
  );
});

export const PopoverArrow = React.forwardRef(function PopoverArrow(props, ref) {
  return (
    <div {...props} ref={ref}>
      {/* Bootstrap Popover already includes an arrow, no need for a custom one */}
      <BootstrapPopover.Arrow />
    </div>
  );
});

export const PopoverCloseTrigger = React.forwardRef(function PopoverCloseTrigger(props, ref) {
  return (
    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }} {...props} ref={ref}>
      <CloseButton size="sm" onClick={props.onClose} />
    </div>
  );
});

export const PopoverTitle = React.forwardRef(function PopoverTitle(props, ref) {
  return <BootstrapPopover.Header ref={ref}>{props.children}</BootstrapPopover.Header>;
});

export const PopoverDescription = React.forwardRef(function PopoverDescription(props, ref) {
  return <BootstrapPopover.Body ref={ref}>{props.children}</BootstrapPopover.Body>;
});

export const PopoverFooter = React.forwardRef(function PopoverFooter(props, ref) {
  return <div ref={ref} className="popover-footer">{props.children}</div>;
});

export const PopoverHeader = React.forwardRef(function PopoverHeader(props, ref) {
  return <div ref={ref} className="popover-header">{props.children}</div>;
});

export const PopoverRoot = React.forwardRef(function PopoverRoot(props, ref) {
  return <div ref={ref} className="popover-root">{props.children}</div>;
});

export const PopoverBody = React.forwardRef(function PopoverBody(props, ref) {
  return <div ref={ref} className="popover-body">{props.children}</div>;
});

export const PopoverTrigger = React.forwardRef(function PopoverTrigger(props, ref) {
  return <div ref={ref}>{props.children}</div>;
});
