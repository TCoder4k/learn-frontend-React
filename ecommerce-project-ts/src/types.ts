export interface Rating {
  stars: number;
  count: number;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  rating: Rating;
  priceCents: number;
  keywords?: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  deliveryOptionId?: string;
  product: Product;
}

export interface PaymentSummaryData {
  totalItems: number;
  productCostCents: number;
  shippingCostCents: number;
  totalCostBeforeTaxCents: number;
  taxCents: number;
  totalCostCents: number;
}

export interface OrderProduct {
  product: Product;
  quantity: number;
  estimatedDeliveryTimeMs: number | string;
}

export interface Order {
  id: string;
  orderTimeMs: number | string;
  totalCostCents: number;
  products: OrderProduct[];
}

export type LoadCart = () => Promise<void>;
