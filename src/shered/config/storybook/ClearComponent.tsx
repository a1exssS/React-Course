import React from 'react'
import CSS from 'csstype';

interface ClearComponentProps {
   children: React.ReactNode;
   styles?: CSS.Properties;
   className?: string;
}

export const ClearComponent = ({ children, styles, className }: ClearComponentProps) => {
   return (
      <div style={styles} className={className || ''}>
         {children}
      </div>
   )
}
