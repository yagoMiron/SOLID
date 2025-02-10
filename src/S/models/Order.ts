import { ProductRegister } from "./ProductRegister";

export type Order = {
  id: string;
  userId: string;
  cart: ProductRegister[];
};
