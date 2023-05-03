import toast from "react-hot-toast";
import { useAppSelector, useTypedDispatch } from "Shared";
import * as Styles from "./Styles";
import { removeCartItem } from "src/logic/actions";

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.appState);

  const dispatch = useTypedDispatch();

  const errorNotify = () => toast.error("Removed from cart");

  const totalPrice = cartItems.reduce(
    (prev, acc) => prev + Number(acc.price),
    0
  );

  const renderPage = () => {
    if (cartItems.length) {
      return cartItems.map((res) => (
        <Styles.ProductWrap
          key={res.id}
          onClick={() => {
            dispatch(removeCartItem(res.id)), errorNotify();
          }}
        >
          <Styles.ProductImage src={res.image} alt="img" />
          <Styles.ProductTitle>{res.title}</Styles.ProductTitle>
          <Styles.ProductPrice>{res.price} &#8377;</Styles.ProductPrice>
        </Styles.ProductWrap>
      ));
    }
    return <Styles.EmptyCart>Cart is empty</Styles.EmptyCart>;
  };

  return (
    <Styles.CartContainer>
      <Styles.ProductContainer>{renderPage()}</Styles.ProductContainer>
      {cartItems.length !== 0 && (
        <Styles.DisplayTotal>
          Total:-{totalPrice.toFixed(2)} &#8377;
        </Styles.DisplayTotal>
      )}
    </Styles.CartContainer>
  );
};

export default Cart;
