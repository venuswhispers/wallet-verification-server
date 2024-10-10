"use client";
import React from "react";
import dynamic from "next/dynamic";

const RainbowProvider = dynamic(() => import("@/providers/rainbowProvider"), {
  ssr: false,
});
const ToastProvider = dynamic(() => import("@/providers/toastProvider"), {
  ssr: false,
});
const ActiveWeb3Provider = dynamic(() => import("@/providers/web3Provider"), {
  ssr: false,
});
import { NextUIProvider } from "@nextui-org/react";

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <NextUIProvider>
      <ToastProvider>
        <RainbowProvider>
          <ActiveWeb3Provider>{children}</ActiveWeb3Provider>
        </RainbowProvider>
      </ToastProvider>
    </NextUIProvider>
  );
};

export default ThemeClient;
