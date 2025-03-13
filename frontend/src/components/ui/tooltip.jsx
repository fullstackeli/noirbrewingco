import * as React from 'react';
import { Tooltip as BootstrapTooltip, OverlayTrigger } from 'react-bootstrap'; 


//function Example() {
  //return (
    //<div>
      //<Tooltip content="This is a tooltip!" showArrow={true}>
        //<Button variant="primary">Hover over me</Button>
      //</Tooltip>
    //</div>
  //);
//}

export const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const {
    showArrow,
    children,
    disabled,
    portalled = true,
    content,
    contentProps,
    portalRef,
    ...rest
  } = props;

  if (disabled) return children;

  return (
    <OverlayTrigger
      {...rest}
      overlay={
        <BootstrapTooltip id="tooltip" {...contentProps}>
          {showArrow && <span className="tooltip-arrow" />}
          {content}
        </BootstrapTooltip>
      }
      placement="top"
    >
      {children}
    </OverlayTrigger>
  );
});
