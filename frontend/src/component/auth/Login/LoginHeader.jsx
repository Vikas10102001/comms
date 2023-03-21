import React from "react";
import { Typography } from "@mui/material";

export default function LoginHeader() {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
        Welcome Back !
      </Typography>
      <Typography sx={{ color: "#b9bbbe", textAlign: "center" }}>
        We are happy that you are with us
      </Typography>
    </>
  );
}
