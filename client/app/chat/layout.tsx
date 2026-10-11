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
      <div className="min-h-screen">
        <Header />
        <Sidebar />
      </div>
    </AuthProvider>
  );
}
