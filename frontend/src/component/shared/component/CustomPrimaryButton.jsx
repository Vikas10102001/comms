import React from "react";
import { Button } from "@mui/material";

export default function CustomPrimaryButton({
  label,
  additionalStyles,
  disabled,
  onClick,
}) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865f2",
        color: "white",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
        textTransform: "none",
        cursor:'pointer',
        "@media (max-width:560px)": {
          fontSize: "12px",
        },
      }}
      style={additionalStyles ? additionalStyles : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
