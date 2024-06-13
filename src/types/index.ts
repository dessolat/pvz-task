export type TPickUp = {
  id: number;
  name: string;
  metro: string;
  address: string;
  deliveryCost: number;
  storageDays: number;
  deliveryDays: { min: number; max: number };
  coords: [number, number];
};

export type THandleFilterChange = (value: string) => void;
