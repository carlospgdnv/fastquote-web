import type { Quote, PurchaseOrder } from '@/types/models';

export const quotesSeed: Quote[] = [
  {
    id: 'q1',
    number: 'Q-2026-0001',
    status: 'DRAFT',
    customer: { name: 'Enel', contactName: 'Luca Rossi', email: 'luca@enel.com', country: 'MX' },
    project: { name: 'Villanueva III', plantName: 'Villanueva', technology: 'SOLAR' },
    currency: 'USD',
    deliveryCenter: 'ROW',
    vatPct: 16,
    validUntil: '2026-12-31',
    createdAt: '2026-10-01T10:00:00Z',
    items: [
      { id: 'i1', product: 'PPC-100', description: 'Power Plant Controller', quantity: 1, unitPrice: 4500000, discountPct: 5 },
      { id: 'i2', product: 'COM-DAY', description: 'Commissioning Engineer (day)', quantity: 10, unitPrice: 110000, discountPct: 0 }
    ]
  }
];

export const poSeed: PurchaseOrder[] = [
  { id: 'po1', number: 'PO-2026-0001', supplier: 'Schneider Electric', date: '2026-10-05', currency: 'USD', status: 'ISSUED' }
];
