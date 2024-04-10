export namespace ProductAPIResponse {
  export interface Product {
    name: string;
    image: string;
    price: number;
  }
}

export type Product = ProductAPIResponse.Product;
