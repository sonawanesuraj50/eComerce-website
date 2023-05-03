import * as Styled from "./Styles";
import { Formik, Form } from "formik";
import { useSignIn } from "react-auth-kit";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

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
  const signIn = useSignIn();

  const errorNotify = () => toast.error("Invalid Credentials");

  const successNotify = () => toast.success("Login Success");

  const handleSubmit = (values: InitialValues) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.name,
        password: values.pass,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!!res.token) {
          signIn({
            token: res.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: { name: values.name },
          });
          successNotify();
        } else errorNotify();
      });
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
                      Submit
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
