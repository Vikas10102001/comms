import React, { useEffect, useState } from "react";
import AuthBox from "../../shared/component/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInput from "./LoginInput";
import LoginFooter from "./LoginFooter";
import { getActions } from "../../../store/actions/authAction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormInvalidText, setIsFormInvalidText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const validatePassword = password.length > 6 && password.length < 12;
    const validateEmail =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    if (!validateEmail && validatePassword) {
      setIsFormInvalidText("Enter a valid email");
    }
    if (!validatePassword && validateEmail) {
      setIsFormInvalidText(
        "Password must be minimum 6 and maximum 12 character"
      );
    }
    if (!validateEmail && !validatePassword) {
      setIsFormInvalidText("Enter correct email and password(6-12 characters)");
    }
    setIsFormValid(validateEmail && validatePassword);
  }, [email, password]);

  const loginHandler = () => {
    const userDetails = { email, password };
    login(userDetails, navigate);
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginInput
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <LoginFooter
        handleLogin={loginHandler}
        isFormValid={isFormValid}
        isFormInvalidText={isFormInvalidText}
      />
    </AuthBox>
  );
}

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionToProps)(Login);
