import { AssemblyItem } from '@/components/assembly-item';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">FWB Workshop 2025</h1>

      <AssemblyItem />

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href="https://github.com/shape-network/fwb-workshop-may-2025">
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
