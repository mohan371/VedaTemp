"use client";

import { NotificationProvider } from "./components/NotificationProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      {children}
    </NotificationProvider>
  );
}
