"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProvideProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

// console.log("convexUrl------>",convexUrl);

const convex = new ConvexReactClient(convexUrl);

// console.log("convex------>",convex);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProvideProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
        {children}
        </Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
       
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
