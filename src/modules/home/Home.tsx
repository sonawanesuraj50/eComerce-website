import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useTypedDispatch } from "Shared";
import * as Styles from "./Styles";
import { setCartItem } from "src/logic/actions";

interface Products {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const dispatch = useTypedDispatch();

  const successNotify = () => toast.success("Successfully added in cart");

  const fetchProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => fetchProduct(), []);

  const handleCart = (id: string) => {
    let FilterCartItem: Products[] = products.filter((v) => id === v.id);

    dispatch(setCartItem(FilterCartItem));

    successNotify();
  };

  return (
    <Styles.HomeContainer>
      <Styles.ProductContainer>
        {products.map((res) => (
          <Styles.ProductWrap key={res.id} onClick={() => handleCart(res.id)}>
            <Styles.ProductImage src={res.image} alt="img" />
            <Styles.ProductTitle>{res.title}</Styles.ProductTitle>
            <Styles.ProductPrice>{res.price} &#8377;</Styles.ProductPrice>
          </Styles.ProductWrap>
        ))}
      </Styles.ProductContainer>
    </Styles.HomeContainer>
  );
};

export default Home;
