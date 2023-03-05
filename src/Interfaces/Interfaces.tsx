export interface ProductList {
  Products: Product[];
}

export interface Product {
  id: number;
  name: string;
  last_modified: string;
}

// Redux Interfaces
export interface LoginState {
  Login: { logged_in: boolean };
}

export interface LoggedInUserState {
  LoggedInUser: {
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
  quantity: string;
}

export interface UpdateProductParams {
  id: number;
  name: string;
  quantity: string;
}
