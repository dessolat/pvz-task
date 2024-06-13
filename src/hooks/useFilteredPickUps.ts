import { useMemo } from 'react';

import { type TPickUp } from 'types';

const useFilteredPickUps = (pickupsList: TPickUp[], filter: string) => {
  return useMemo(
    () =>
      filter === ''
        ? pickupsList
        : pickupsList.filter(
            ({ address, metro, name }) =>
              name.toLowerCase().includes(filter.toLowerCase()) ||
              address.toLowerCase().includes(filter.toLowerCase()) ||
              metro.toLowerCase().includes(filter.toLowerCase())
          ),
    [filter]
  );
};

export default useFilteredPickUps;
