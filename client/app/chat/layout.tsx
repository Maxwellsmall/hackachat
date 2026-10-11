"use client";
import Header from "@/components/chat/Header";
import Sidebar from "@/components/chat/Sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
    </div>
  );
}
