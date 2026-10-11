"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {

    }
  }, [code]) 

  return <div>Authentication {code}</div>;
}

export default AuthPage;
