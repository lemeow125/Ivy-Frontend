export interface ProductList {
  Products: Product[];
}

export interface Product {
  id: number;
  name: string;
  date_added: string;
}

// Redux Interfaces
export interface LoginState {
  logged_in: {
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
  quantity: string;
}
