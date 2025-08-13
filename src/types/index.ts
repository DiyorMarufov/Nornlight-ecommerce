export interface IProduct {
  id: number;
  thumbnail: string;
  title: string;
  discountPercentage: number;
  price: number;
}

export interface IResponse {
  products: IProduct[];
  limit: number;
  total: number;
  skip: number;
}
