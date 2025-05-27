import { shape, shapeSepolia } from 'viem/chains';

export const config = {
  chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID) as typeof shape.id | typeof shapeSepolia.id,
  alchemyKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY as string,
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
} as const;
