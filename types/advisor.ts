export interface Advisor {
  id: number;
  name: string;
  avatar: string;
  price: number;
  callAvailable: boolean;
  chatAvailable: boolean;
}

export interface AdvisorAvailability {
  id: number;
  callAvailable: boolean;
  chatAvailable: boolean;
}
