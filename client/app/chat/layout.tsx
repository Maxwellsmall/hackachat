"use client";

import Header from "@/components/chat/Header";
import Sidebar from "@/components/chat/Sidebar";
import SettingsDialog from "@/components/dialog/SettingsDialog";
import AuthProvider from "@/context/AuthProvider";
import DialogProvider from "@/context/DialogProvider";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AuthProvider>
      <DialogProvider>
        <div className="flex h-screen flex-col overflow-hidden">
          <Header />

          <div className="flex flex-1 min-h-0 overflow-hidden">
            <Sidebar />

            <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
        <SettingsDialog />
      </DialogProvider>
    // </AuthProvider>
  );
}
