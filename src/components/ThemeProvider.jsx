'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
      }, []);
    
      if (!mounted) {
        return null; // Prevent rendering until mounted to avoid hydration mismatch
      }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
