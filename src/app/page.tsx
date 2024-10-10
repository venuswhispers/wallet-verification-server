"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// hooks
import useActiveWeb3 from "@/hooks/useActiveWeb3";
import { useSignMessage } from "wagmi";
import { Button } from "@nextui-org/react";
import { InlineIcon } from "@iconify/react";
import { verifyMessage } from "ethers/lib/utils";
import { useSearchParams } from "next/navigation";

const Home = () => {
  const { openConnectModal } = useConnectModal();
  // router
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";

  console.log({ id });

  const { address, chainId, signer } = useActiveWeb3();
  const { signMessageAsync } = useSignMessage();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSignMessaage = async () => {
    try {
      setIsLoading(true);
      const message = process.env.NEXT_PUBLIC_MESSAGE!;
      const signature = await signMessageAsync({ message });
      console.log(signature);

      const output = verifyMessage(
        process.env.NEXT_PUBLIC_MESSAGE!,
        process.env.NEXT_PUBLIC_MESSAGE!
      );
      console.log(output);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    if (!address || !chainId || !signer) {
      openConnectModal!();
    } else {
      handleSignMessaage();
    }
  };

  return (
    <div className="bg-black w-full h-screen">
      <div className="flex justify-end mt-10 px-5">
        <ConnectButton />
      </div>
      <div className="justify-center mt-20 px-5 w-full">
        <h1 className="text-white text-5xl font-bold text-center">
          Please verify your wallet ownership
        </h1>
        <h3 className="text-white/70 text-2xl text-center mt-20">
          You can prove your wallet ownership to verify above message using your
          non-custodial wallet
        </h3>
        <div className="mt-10 text-center">
          <Button
            onClick={handleClick}
            color="primary"
            className="w-60 h-20 text-xl bg-green-600"
          >
            {isLoading ? "Signing..." : <span>Sign Message</span>}
            {isLoading ? (
              <InlineIcon
                icon="icomoon-free:spinner9"
                className="text-4xl text-white spin"
              />
            ) : (
              <InlineIcon
                icon="game-icons:key-card"
                className="text-4xl text-white"
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
