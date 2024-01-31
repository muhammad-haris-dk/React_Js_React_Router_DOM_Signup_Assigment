import { TextField } from "@mui/material";
import React from "react";

export function Input(props) {
    const {placeholder,onchange,type,id,required} = props
  return (
    <div>
      <TextField 
      sx={{marginTop:"15px",width:"400px"}}
      label={placeholder}
      type={type}
      id={id}
      required={required}
      onChange={onchange}
      />
    </div>
  );
}
