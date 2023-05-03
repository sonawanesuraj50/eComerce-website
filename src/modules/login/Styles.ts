import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginFormContainer = styled.div`
  width: 400px;
  height: 500px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
  border: 1px solid #dedeff;
  border-radius: 20px;

  form {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 510px) {
    width: 90%;
  }
`;

export const LoginText = styled.div`
  color: black;
  text-align: center;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const InputField = styled(Field)`
  width: 100%;
  height: 48px;
  color: black;
  background: transparent;
  border: 1px solid #343940;
  border-radius: 6px;
  padding: 11px 15px;
  outline: none;
  transition: 300ms all;

  ::placeholder {
    color: #4d5357;
  }

  :focus {
    border: 1px solid blueviolet;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: blueviolet;
  transition: all 300ms ease-out;

  :hover {
    cursor: pointer;
    background-color: #7c00ee;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;
