import { IMAGES } from "Shared";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "Shared";
import * as Styles from "./Styles";
import { Paths } from "src/constants";
import { useSignOut } from "react-auth-kit";

const Header = () => {
  const navigate = useNavigate();

  const signOut = useSignOut();

  const { cartItems } = useAppSelector((state) => state.appState);

  const handlePath = (path: string) => {
    navigate(path);
  };

  return (
    <Styles.HeaderContainer>
      <Styles.Logo src={IMAGES.burgerKing} alt="logo" />
      <Styles.HeaderLinkWrap>
        <Styles.HeaderLink onClick={() => handlePath(Paths.home)}>
          Home
        </Styles.HeaderLink>
        <Styles.HeaderLink onClick={() => handlePath(Paths.about)}>
          About
        </Styles.HeaderLink>
        <Styles.HeaderLink onClick={() => handlePath(Paths.contact)}>
          Contact
        </Styles.HeaderLink>
        <Styles.HeaderLink onClick={() => handlePath(Paths.cart)}>
          Cart ({cartItems.length})
        </Styles.HeaderLink>
        <Styles.HeaderLink onClick={() => signOut()}>Logout</Styles.HeaderLink>
      </Styles.HeaderLinkWrap>
    </Styles.HeaderContainer>
  );
};

export default Header;
