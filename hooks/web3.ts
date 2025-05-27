import { OwnedItem } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import superjson from 'superjson';
import { useAccount } from 'wagmi';

export function useGetItemsForUser() {
  const { address } = useAccount();

  return useQuery<OwnedItem[]>({
    queryKey: ['items', address],
    queryFn: async () => {
      const response = await fetch('/api/owned-items', {
        method: 'POST',
        body: JSON.stringify({ address }),
      });
      const data = await response.text();
      return superjson.parse<OwnedItem[]>(data);
    },
    enabled: !!address,
  });
}
