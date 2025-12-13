// client/src/components/ui/dropdown-menu.jsx

import React from 'react';

export const DropdownMenu = ({ children }) => {
  return <div className="dropdown-menu-container">{children}</div>;
};

export const DropdownMenuTrigger = ({ children, asChild }) => {
  if (asChild) {
    return children; 
  }
  return <button className="dropdown-menu-trigger">{children}</button>;
};

export const DropdownMenuContent = ({ children }) => {
  return <div className="dropdown-menu-content-box">{children}</div>;
};

export const DropdownMenuItem = ({ children }) => {
  return <div className="dropdown-menu-item">{children}</div>;
};

export const DropdownMenuLabel = ({ children }) => {
  return <div className="dropdown-menu-label">{children}</div>;
};

export const DropdownMenuSeparator = () => {
  return <div className="dropdown-menu-separator-line" style={{ borderTop: '1px solid #ccc' }} />;
};

export const DropdownMenuGroup = ({ children }) => {
  return <div className="dropdown-menu-group-wrapper">{children}</div>;
};



