import * as api from "@/lib/api";
import { AuthResponseDto } from "@/lib/api";
import { useModelStore } from "@/stores/modelStore";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContext {
  user: AuthResponseDto | null;
  setUser: (user: AuthResponseDto) => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext used outside o scope");
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
  const { setModels, setActiveModel } = useModelStore();

  useEffect(() => {
    const load = async () => {
      const data = localStorage.getItem("userData");
      if (!data) router.push("/auth");
      else {
        setUser(JSON.parse(data));
        setIsLoading(false);
      }

      const selectedModel = localStorage.getItem("selectedModel");
      if (selectedModel) setActiveModel(JSON.parse(selectedModel));

      const res = await api.chat.chatControllerGetModels({});
      if (res.data) {
        setModels(res.data);
        console.log(res.data);
      }
    };
    load();
  }, [router, setActiveModel, setModels]);

  return !isLoading ? (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  ) : (
    <></>
  );
}
