import * as React from 'react';
import { LuX } from 'react-icons/lu';
import { Button } from 'react-bootstrap'; // Import Bootstrap Button

function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}

export const CloseButton = React.forwardRef(function CloseButton(props, ref) {
  return (
    <Button
      variant="outline-danger"  // Bootstrap's style for a close button
      aria-label="Close"
      ref={ref}
      {...props}
      style={{ padding: '0.25rem 0.5rem', fontSize: '1.25rem', borderRadius: '50%' }} // Customizing for icon button look
    >
      {_nullishCoalesce(props.children, () => (
        <LuX /> // Default close icon
      ))}
    </Button>
  );
});
