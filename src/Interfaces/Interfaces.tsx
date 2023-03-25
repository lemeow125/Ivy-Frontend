export interface ProductList {
  Products: Product[];
}

export interface Product {
  id: number;
  name: string;
  date_added: string;
  quantity: number;
  history: ProductHistoryEntry[];
}

export interface ProductHistoryEntry {
  quantity: number;
  history_date: string;
}

export interface ProductLogList {
  ProductLogs: ProductLog[];
}

export interface ProductLogEntry {
  Product: {
    history_id: number;
    id: number;
    name: string;
    quantity: string;
    history_date: string;
    history_user: string;
  };
}

export interface ProductLog {
  history_id: number;
  id: number;
  name: string;
  quantity: string;
  history_date: string;
  history_user: string;
}

// Component Props Interfaces

export interface IconProps {
  size: number;
  color: string;
}

// API Interfaces

export interface RegistrationParams {
  email: string;
  username: string;
  password: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface ActivationParams {
  uid: string;
  token: string;
}

export interface AddProductParams {
  name: string;
}

export interface UpdateProductParams {
  id: number;
  name: string;
  quantity: number;
}
