import React from "react";
import LabeledInput from "../../shared/component/LabeledInput";

export default function LoginInput({ email, password, setEmail, setPassword }) {
  return (
    <>
      <LabeledInput
        label="E-mail"
        type="email"
        placeholder="Enter your email address"
        value={email}
        setValue={setEmail}
      />
      <LabeledInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
      />
    </>
  );
}
