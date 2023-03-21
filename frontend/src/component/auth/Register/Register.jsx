import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/component/AuthBox";
import RegisterHeader from "./RegisterHeader";
import RegisterInput from "./RegisterInput";
import RegisterFooter from "./RegisterFooter";
import { getActions } from "../../../store/actions/authAction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Register({ register }) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormInvalidText, setIsFormInvalidText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const validatePassword = password.length > 5 && password.length < 13;
    const validateEmail =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const validateUser = username.length > 2 && username.length < 21;
    if (!validateEmail && validatePassword && validateUser) {
      setIsFormInvalidText("Enter a valid email");
    } else if (!validatePassword && validateEmail && validateUser) {
      setIsFormInvalidText(
        "Password must be minimum 6 and maximum 12 character"
      );
    } else if (!validateUser && validateEmail && validatePassword) {
      setIsFormInvalidText(
        "Username must be minimum 3 and maximum 20 character"
      );
    } else
      setIsFormInvalidText(
        "Enter correct email and password(6-12 characters) and username(3-20 character)"
      );

    setIsFormValid(validateEmail && validatePassword && validateUser);
  }, [email, password, username]);

  const signUpHandler = () => {
    const userDetails = { email, password, username };
    register(userDetails, navigate);
  };
  return (
    <AuthBox>
      <RegisterHeader />
      <RegisterInput
        username={username}
        password={password}
        email={email}
        setUser={setUser}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <RegisterFooter
        isFormValid={isFormValid}
        handleSignUp={signUpHandler}
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
export default connect(null, mapActionToProps)(Register);
