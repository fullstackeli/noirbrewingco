import * as React from 'react';

export const Radio = React.forwardRef(function Radio(props, ref) {
  const { children, inputProps, ...rest } = props;

  return (
    <div className="form-check" {...rest}>
      {/* Radio input field */}
      <input
        ref={ref}
        className="form-check-input"
        type="radio"
        {...inputProps} // Spread other props such as 'name', 'value', etc.
      />
      {/* Indicator / Label */}
      <label className="form-check-label">
        {children}
      </label>
    </div>
  );
});

export const RadioGroup = ({ children, ...rest }) => {
  return (
    <div className="form-check-group" {...rest}>
      {children}
    </div>
  );
};
