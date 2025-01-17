
export interface ProductType {
    title: string;
    price: number;
    discount: number;
    related: boolean;
    salesPrice: number;
    category: string[];
    gender: string;
    rating: number;
    stock: boolean;
    qty: number;
    colors: string[];
    photo: string;
    id: number | string;
    created: Date;
    description: string;
  }

  export interface ClientType {
    client_id: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    payment_status?: boolean;
    assigned_employee?: string;
    enrolled_courses?: string;
    nin?: string;
    phone_number?: string;
    status?: string;
    key: string | number | boolean;
  }
  
  export interface ProductFiterType {
    id: number;
    filterbyTitle?: string;
    name?: string;
    sort?: string;
    icon?:  any;
    devider?: boolean;
  }
  
  export interface ProductCardProps {
    id?: string | number;
    color?: string;
    like: string;
    star: number;
    value?: string;
  }
  