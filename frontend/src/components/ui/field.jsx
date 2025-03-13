import * as React from 'react';
import { Form } from 'react-bootstrap'; // Import necessary components from react-bootstrap

export const Field = React.forwardRef(function Field(props, ref) {
  const { label, children, helperText, errorText, optionalText, ...rest } = props;
  
  return (
    <Form.Group ref={ref} {...rest}>
      {label && (
        <Form.Label>
          {label}
          {/* Display optionalText if provided */}
          {optionalText && <span className="text-muted"> ({optionalText})</span>}
        </Form.Label>
      )}
      {children}
      {helperText && <Form.Text className="text-muted">{helperText}</Form.Text>}
      {errorText && <Form.Text className="text-danger">{errorText}</Form.Text>}
    </Form.Group>
  );
});
