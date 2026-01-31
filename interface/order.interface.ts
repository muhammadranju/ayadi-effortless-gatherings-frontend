export interface Order {
  _id: string;
  status: string;
  createdAt: string;
  deliveryDetails?: {
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
  };
  dateTime?: {
    date: string;
    time: string;
  };
  orderType: string;
  selectedPackage?: {
    platterName: string;
    person: number;
    price?: number;
    _id?: string;
  };
  pricing?: {
    total: number;
    subtotal?: number;
    vat?: number;
    deliveryFee?: number;
  };
  items?: any[]; // details for build your own menu
}

export interface OrdersResponse {
  success: boolean;
  message: string;
  data: {
    data: Order[];
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
  };
}
