"use client";
import { LoaderCircle } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import * as api from "@/lib/api";

function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  useEffect(() => {
    const verifyTokens = async () => {
      if (!code) {
        window.location.replace(
          `${process.env.NEXT_PUBLIC_API_URL as string}/api/auth/hackclubauth?redirect_uri=${window.location.href}`,
        );
      } else {
        const res = await api.auth.authControllerHackclubAuthCallback({
          query: { code, redirect_uri: window.location.href },
        });
        console.log(res);
      }
    };
    verifyTokens()
  }, [code, router]);

  return code ? (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-3">
        <div className="flex items-center gap-3">
          <HugeiconsIcon
            icon={LoaderCircle}
            className="animate-spin"
            size={36}
          />
          <h1 className="text-xl">Authenticating & Verifying</h1>
        </div>
        {/* <p className="text-sm text-black/60">Exchanging auth token, please wait</p> */}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default AuthPage;
