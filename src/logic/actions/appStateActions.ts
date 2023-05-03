import * as Actions from "./constants";

interface Products {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface SetCartItem {
  type: typeof Actions.SET_CART_ITEMS;
  cartItems: Products[];
}

export const setCartItem = (cartItems: Products[]): SetCartItem => ({
  type: Actions.SET_CART_ITEMS,
  cartItems,
});

interface RemoveCartItem {
  type: typeof Actions.REMOVE_CART_ITEMS;
  removeCartItem: string;
}

export const removeCartItem = (removeCartItem: string): RemoveCartItem => ({
  type: Actions.REMOVE_CART_ITEMS,
  removeCartItem,
});

export type AppStateActions = SetCartItem | RemoveCartItem;
