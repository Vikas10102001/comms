import React from "react";
import { Tooltip } from "@mui/material";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import RedirectingComponent from "../../shared/component/RedirectingComponent";

export default function LoginFooter({
  handleLogin,
  isFormValid,
  isFormInvalidText,
}) {
  return (
    <>
      <Tooltip
        title={isFormValid ? "Press this button to login" : isFormInvalidText}
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            onClick={handleLogin}
            disabled={!isFormValid}
            additionalStyles={{ marginTop: "20px" }}
          />
        </div>
      </Tooltip>
      <RedirectingComponent
        redirectText="Create an account"
        redirectPath="/register"
        text="Not having an account ?"
      />
    </>
  );
}
