import axios from "axios";
import type { Product,Category, ProductsResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com/products";

interface GetProductsParams {
  limit: number;
  skip: number;
  search?: string;
  category?: string;
}

export async function getProducts({
  limit,
  skip,
  search,
  category,
}: GetProductsParams): Promise<ProductsResponse> {
  let url = `${BASE_URL}`;

  if (search) {
    url = `${BASE_URL}/search`;
  } else if (category) {
    url = `${BASE_URL}/category/${category}`;
  }

  const { data } = await axios.get<ProductsResponse>(url, {
    params: {
      limit,
      skip,
      ...(search ? { q: search } : {}),
    },
  });

  return data;
}


export async function getCategories(): Promise<Category[]> {
  const { data } = await axios.get<Category[]>(`${BASE_URL}/categories`);
  return data;
}