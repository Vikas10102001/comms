import React from "react";
import { Tooltip } from "@mui/material";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import RedirectingComponent from "../../shared/component/RedirectingComponent";

export default function RegisterFooter({
  handleSignUp,
  isFormValid,
  isFormInvalidText,
}) {
  return (
    <>
      <Tooltip
        title={
          isFormValid
            ? "Press this button to create account"
            : isFormInvalidText
        }
      >
        <div>
          <CustomPrimaryButton
            label="Signup"
            onClick={handleSignUp}
            disabled={!isFormValid}
            additionalStyles={{ marginTop: "20px" }}
          />
        </div>
      </Tooltip>
      <RedirectingComponent
        redirectText="Login"
        redirectPath='/Login'
        text="Already have an account ?"
      />
    </>
  );
}
