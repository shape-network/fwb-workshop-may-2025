import assemblyCoreAbi from '@/abi/AssemblyCore.json';
import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import { Abi } from 'viem';

export default defineConfig({
  out: 'generated.ts',
  contracts: [
    {
      name: 'AssemblyCoreContract',
      abi: assemblyCoreAbi.abi.filter(
        (item) => !(item.type === 'function' && item.name?.startsWith('_'))
      ) as Abi,
    },
  ],
  plugins: [react()],
});
