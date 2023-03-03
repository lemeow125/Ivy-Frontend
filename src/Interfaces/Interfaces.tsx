export interface ProductList {
  Products: Product[];
}

export interface Product {
  id: number;
  name: string;
  last_modified: string;
}
