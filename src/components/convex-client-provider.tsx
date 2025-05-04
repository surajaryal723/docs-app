"use client";

import { ReactNode } from "react";
import { ConvexProviderWithAuth, ConvexReactClient,AuthLoading,Authenticated,Unauthenticated } from "convex/react";
import { ClerkProvider, useAuth as useClerkAuth,SignIn } from "@clerk/clerk-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function useConvexAuth() {
  const { isLoaded, isSignedIn, getToken } = useClerkAuth();

  return {
    isLoading: !isLoaded,
    isAuthenticated: isLoaded && isSignedIn,
    fetchAccessToken: async () => {
      const token = await getToken();
      return token || null;
    },
  };
}

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithAuth useAuth={useConvexAuth} client={convex}>
        <Authenticated>
        {children}
        </Authenticated>
        <Unauthenticated>
          <div className="w-full min-h-screen flex items-center justify-center">
          <SignIn/>
          </div>
        </Unauthenticated>
        <AuthLoading><p>Authenticating</p></AuthLoading>
      </ConvexProviderWithAuth>
    </ClerkProvider>
  );
}
