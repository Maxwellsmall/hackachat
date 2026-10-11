import { AuthResponseDto } from "@/lib/api";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContext {
  user: AuthResponseDto | null;
  setUser: (user: AuthResponseDto) => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("Auth Context not found");
  return ctx;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<AuthResponseDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = () => {
      const data = localStorage.getItem("userData");
      if (!data) router.push("/");
      else {
        setUser(JSON.parse(data));
        setIsLoading(false);
      }
    };
    load();
  }, [router]);

  return !isLoading ? (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  ) : (
    <></>
  );
}
