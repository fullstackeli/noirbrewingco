'use client'

import { ThemeProvider, useTheme } from 'next-themes';
import * as React from 'react';
import { Button, Spinner } from 'react-bootstrap'; // Import Bootstrap components
import { LuMoon, LuSun } from 'react-icons/lu';

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange {...props} />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />;
}

export const ColorModeButton = React.forwardRef(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      {/* Fallback spinner if loading */}
      {props.isLoading ? (
        <Spinner animation="border" size="sm" />
      ) : (
        <Button
          onClick={toggleColorMode}
          variant='outline-secondary'
          aria-label='Toggle color mode'
          size='sm'
          ref={ref}
          {...props}
        >
          <ColorModeIcon />
        </Button>
      )}
    </div>
  );
});

export const LightMode = React.forwardRef(function LightMode(props, ref) {
  return (
    <div className="text-light" ref={ref} {...props}>
      {props.children}
    </div>
  );
});

export const DarkMode = React.forwardRef(function DarkMode(props, ref) {
  return (
    <div className="text-dark" ref={ref} {...props}>
      {props.children}
    </div>
  );
});
