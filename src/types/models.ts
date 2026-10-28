export type ID = string;
export type Currency = 'USD' | 'EUR' | 'MXN' | 'GBP' | 'AUD';
export type DeliveryCenter = 'ROW' | 'USA' | 'APAC';
export type TechnologyType = 'SOLAR' | 'WIND' | 'BESS' | 'HYBRID';

export interface QuoteItem {
  id: ID;
  product?: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discountPct: number;
}

export interface Quote {
  id: ID;
  number: string;
  status: 'DRAFT' | 'SENT';
  customer: { name: string; contactName: string; email: string; country: string };
  project: { name: string; plantName: string; technology: TechnologyType };
  currency: Currency;
  deliveryCenter: DeliveryCenter;
  vatPct: number;
  validUntil: string;
  items: QuoteItem[];
  createdAt: string;
}

export interface PurchaseOrder {
  id: ID;
  number: string;
  supplier: string;
  date: string;
  currency: Currency;
  comments?: string;
  status: 'DRAFT' | 'ISSUED';
}
