"use client";
import React from "react";
import { useTheme } from "next-themes";
import {
  RainbowKitProvider,
  darkTheme,
  AvatarComponent,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/constants/wagmiConfig";
import Image from "next/image";

const queryClient = new QueryClient();

const RainbowProvider = ({ children }: { children: React.ReactNode }) => {
  const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => (
    <Image
      src={"/favicon.jpg"}
      width={size}
      height={size}
      alt="avatar"
      className="rounded-full"
    />
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider avatar={CustomAvatar} theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowProvider;
