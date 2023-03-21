import React from "react";
import LabeledInput from "../../shared/component/LabeledInput";

export default function RegisterInput({
  email,
  password,
  user,
  setEmail,
  setPassword,
  setUser,
}) {
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
        label="Username"
        type="text"
        placeholder="Enter Username"
        value={user}
        setValue={setUser}
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
