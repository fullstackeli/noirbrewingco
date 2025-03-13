import * as React from 'react';
import { Image, Placeholder } from 'react-bootstrap'; // Bootstrap components for image and placeholder

export const Avatar = React.forwardRef(function Avatar(props, ref) {
  const {
    name,
    src,
    srcSet,
    loading,
    icon,
    fallback,
    children,
    ...rest
  } = props;

  // Fallback content logic
  const renderFallback = icon || fallback || <span>{name?.charAt(0)}</span>; // Default fallback: first letter of the name

  return (
    <div {...rest} ref={ref} style={{ display: 'inline-block', position: 'relative' }}>
      {/* Avatar Image */}
      {src ? (
        <Image
          src={src}
          srcSet={srcSet}
          alt={name}
          roundedCircle
          fluid
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
      ) : (
        // Fallback content if no image is provided
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#888',
          }}
        >
          {renderFallback}
        </div>
      )}

      {children}
    </div>
  );
});

export const AvatarGroup = ({ children, ...rest }) => {
  return (
    <div {...rest} style={{ display: 'flex', gap: '5px' }}>
      {children}
    </div>
  );
};
