import * as Actions from "../actions";

interface Products {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface InitialState {
  cartItems: Products[];
}

const initialState: InitialState = {
  cartItems: [],
};

const appStateReducer = (
  state = initialState,
  action: Actions.AppActions
): InitialState => {
  switch (action.type) {
    case Actions.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: [...state.cartItems, ...action.cartItems],
      };

    case Actions.REMOVE_CART_ITEMS:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((v) => v.id !== action.removeCartItem),
        ],
      };

    default:
      return state;
  }
};

export default appStateReducer;
