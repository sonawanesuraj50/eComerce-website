import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 0 80px;
  margin: 30px 0;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductWrap = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  :hover {
    border: 1px solid purple;
    transition: all 300ms ease-in-out;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  transition: all 300ms ease-in-out;
  border-radius: 10px;

  :hover {
    transform: scale(1.07);
  }
`;

export const ProductTitle = styled.div`
  height: 25px;
  overflow: hidden;
`;

export const EmptyCart = styled.h1`
  width: 100%;
  text-align: center;
`;

export const ProductPrice = styled(ProductTitle)`
  display: flex;
  justify-content: end;
`;


export const DisplayTotal = styled.h1`
  width: 100%;
  text-align: center;
`;