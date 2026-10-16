import React, { useContext, createContext, useEffect } from "react";

interface DatabaseContext {
  databade: string;
}

const DatabaseContext = createContext<DatabaseContext | null>(null);

export const useDatabaseContext = () => {
  const ctx = useContext(DatabaseContext);

  if (!ctx) throw new Error("DatabaseContext used outside of scope");
  return ctx;
};

export default function DatabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const request = window.indexedDB.open("chats");

    request.onsuccess = (e) => {
        e.target
    }
  }, []);
  return (
    <DatabaseContext.Provider value={{ databade: "" }}>
      {children}
    </DatabaseContext.Provider>
  );
}
