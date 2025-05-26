import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          dApp Starter
        </h1>
        <p className="text-muted-foreground max-w-2xl text-xl">
          A modern & sleek starter kit for building decentralized applications
          with Next.js, Wagmi, and Shape Network
        </p>
      </div>

      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Web3 Ready</CardTitle>
            <CardDescription>
              Pre-configured with Wagmi, RainbowKit, and Alchemy SDK
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Connect wallets, interact with smart contracts, and manage
              blockchain state with ease.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modern Stack</CardTitle>
            <CardDescription>
              Built with Next.js 15, TypeScript, Shadcn/ui and Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Leverages the latest web technologies for optimal performance and
              developer experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shape Network</CardTitle>
            <CardDescription>
              Optimized for Shape Mainnet and Sepolia testnet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built specifically for the Shape ecosystem with pre-configured RPC
              endpoints.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href="https://github.com/shape-network/dapp-starter">
            <ArrowTopRightIcon className="mr-2 h-4 w-4" />
            View Source
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://docs.shape.network">
            <ArrowTopRightIcon className="mr-2 h-4 w-4" />
            Shape Docs
          </Link>
        </Button>
      </div>
    </div>
  );
}
