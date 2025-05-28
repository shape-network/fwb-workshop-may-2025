'use client';

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useGetItemsForUser } from '@/hooks/web3';
import { assemblyItems } from '@/lib/addresses';
import { config } from '@/lib/config';
import { OwnedItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useMemo, useState } from 'react';

const FWB_ITEM_ID = BigInt(18);

type FilterMode = 'fwb' | 'all';

export const AssemblyItem: FC = () => {
  const { data: items, isLoading, isError } = useGetItemsForUser();
  const [filterMode, setFilterMode] = useState<FilterMode>('fwb');

  const filteredItems = useMemo(() => {
    if (!items) return [];
    if (filterMode === 'all') return items;
    return items.filter((item) => item.id === FWB_ITEM_ID);
  }, [items, filterMode]);

  if (isLoading) {
    return (
      <Container>
        <div className="grid place-items-center">Loading...</div>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <div className="grid place-items-center">Error</div>
      </Container>
    );
  }

  if (!items || items.length === 0) {
    return (
      <Container>
        <div className="grid place-items-center">No items found</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="w-full space-y-6">
        <div className="flex justify-center">
          <RadioGroup
            value={filterMode}
            onValueChange={(value) => setFilterMode(value as FilterMode)}
            className="flex flex-row gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fwb" id="fwb" />
              <Label htmlFor="fwb" className="cursor-pointer text-sm font-medium">
                FWB Item
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="cursor-pointer text-sm font-medium">
                All Items
              </Label>
            </div>
          </RadioGroup>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500">
            No {filterMode === 'fwb' ? 'FWB ' : ''}items found
          </div>
        )}

        {filteredItems.length === 1 && (
          <ul className="grid w-full place-items-center px-12">
            {filteredItems.map((item) => (
              <ItemCard key={item.id.toString() + item.tokenId} item={item} size="large" />
            ))}
          </ul>
        )}

        {filteredItems.length > 1 && (
          <ul className="grid w-full gap-4 px-5 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {filteredItems.map((item) => (
              <ItemCard key={item.id.toString() + item.tokenId} item={item} />
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

const ItemCard: FC<{ item: OwnedItem; size?: 'normal' | 'large' }> = ({
  item,
  size = 'normal',
}) => {
  return (
    <Link
      className="group"
      href={`https://sepolia.shapescan.xyz/token/${assemblyItems[config.chainId]}/instance/${item.tokenId}`}
      target="_blank"
    >
      <Card
        key={item.id.toString() + item.tokenId}
        className={cn(
          'pt-4 pb-2 transition-transform duration-300 group-hover:scale-[103%]',
          size === 'large' && 'sm:min-w-md'
        )}
      >
        <CardContent className="flex items-center justify-center">
          <Image
            src={item.defaultImageUri}
            alt={item.name}
            width={250}
            height={250}
            className={cn(size === 'large' && 'mb-12 w-full')}
          />
        </CardContent>

        <div className="flex flex-row justify-between px-4">
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>id: {item.id.toString()}</CardDescription>
        </div>
      </Card>
    </Link>
  );
};

const Container: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <ScrollArea className={cn('grid w-full max-w-4xl items-start sm:h-[650px]', className)}>
      {children}
    </ScrollArea>
  );
};
