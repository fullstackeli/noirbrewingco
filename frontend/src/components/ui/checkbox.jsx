import * as React from 'react';
import { Form } from 'react-bootstrap'; // Import Bootstrap's Form component for styling

export const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const { icon, children, inputProps, rootRef, ...rest } = props;

  return (
    <Form.Check
      {...rest}
      type="checkbox"
      ref={rootRef}
      label={children}
      custom
      {...inputProps} // spread inputProps if needed for additional customization
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {icon && <span className="me-2">{icon}</span>} {/* Display icon if provided */}
    </Form.Check>
  );
});
