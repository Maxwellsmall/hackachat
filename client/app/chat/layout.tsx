"use client";

import Header from "@/components/chat/Header";
import Sidebar from "@/components/chat/Sidebar";
import AuthProvider from "@/context/AuthProvider";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Sidebar />

        <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
    </AuthProvider>
  );
}
  );
}
