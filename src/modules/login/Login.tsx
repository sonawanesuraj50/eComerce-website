import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as Styled from "./Styles";

interface InitialValues {
  name: string;
  pass: string;
}

const initialValues: InitialValues = {
  name: "",
  pass: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("Enter UserName"),
  pass: Yup.string().required("Enter Password"),
});

const Login = () => {
  const [buttonLoader, setButtonLoader] = useState(false);

  const signIn = useSignIn();

  const errorNotify = () => toast.error("Invalid Credentials");

  const successNotify = () => toast.success("Login Success");

  const handleSubmit = async (values: InitialValues) => {
    try {
      setButtonLoader(true);

      const { data } = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: values.name,
          password: values.pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      signIn({
        token: data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { name: values.name },
      });
      successNotify();
    } catch (err) {
      console.log("error in login", err);
      errorNotify();
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <Styled.LoginContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginText>Login</Styled.LoginText>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
          enableReinitialize
        >
          {() => {
            return (
              <Form>
                <>
                  <Styled.InputWrap>
                    <div>
                      <Styled.InputField
                        type="text"
                        name="name"
                        placeholder="kminchelle"
                      />
                      <Styled.Error name="name" component="div" />
                    </div>
                    <div>
                      <Styled.InputField
                        type="password"
                        name="pass"
                        placeholder="0lelplR"
                      />
                      <Styled.Error name="pass" component="div" />
                    </div>
                    <Styled.SubmitButton type="submit">
                      Login {buttonLoader && <Styled.LoadingSpinner />}
                    </Styled.SubmitButton>
                  </Styled.InputWrap>
                </>
              </Form>
            );
          }}
        </Formik>
      </Styled.LoginFormContainer>
    </Styled.LoginContainer>
  );
};

export default Login;
