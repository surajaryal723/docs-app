"use client";

import { ReactNode } from "react";
import {ConvexReactClient,AuthLoading,Authenticated,Unauthenticated } from "convex/react";
import {ConvexProviderWithClerk} from "convex/react-clerk"
import { ClerkProvider, useAuth,SignIn } from "@clerk/nextjs";
import { FullScreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);



export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
        {children}
        </Authenticated>
        <Unauthenticated>
          <div className="w-full min-h-screen flex items-center justify-center">
          <SignIn routing="hash"/>
          </div>
        </Unauthenticated>
        <AuthLoading><FullScreenLoader label="Loading"/></AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
