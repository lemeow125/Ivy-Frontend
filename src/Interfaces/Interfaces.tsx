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

// Redux Interfaces
export interface LoginState {
  logged_in: {
    value: boolean;
  };
}

export interface OldSessionState {
  old_session_checked: {
    value: boolean;
  };
}

export interface LoggedInUserState {
  logged_in_user: {
    value: {
      email: string;
      id: number;
      username: string;
    };
  };
}

export interface SessionTransactions {
  session_transactions: {
    added: number;
    removed: number;
  };
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
