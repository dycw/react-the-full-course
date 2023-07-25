import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Products = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], null>({
      query: () => "/",
      transformResponse: async (resp: Products) => {
        await new Promise((r) => setTimeout(r, 2000));
        return resp.products.slice(0, 5);
      },
    }),
  }),
});

export const { useGetProductsQuery } = api;
