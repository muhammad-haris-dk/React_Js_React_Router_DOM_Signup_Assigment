import { Button, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Input } from "../Components/Input";
import { useNavigate } from "react-router-dom";
import { Compare } from "../Components/Utils/Compare";
export default function Register() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const onchangeHandlng = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
  };
  const submitHandling = (e) => {
    e.preventDefault();
    const { username, password } = data;

    localStorage.setItem("username",username)
    localStorage.setItem("password",password)

    
    navigate("/login");
    // console.log(Compare)
  };
  return (
    <div>
      <Stack className="items-center justify-center h-[100dvh]" spacing={5}>
        <Paper
          component="form"
          onSubmit={submitHandling}
          elevation={3}
          className="py-10 px-10"
        >
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Sign Up Form
          </Typography>
          <Input
            placeholder="Enter a username"
            type="text"
            id="username"
            onchange={onchangeHandlng}
            required={true}
          />
          <Input
            placeholder="Enter a password"
            type="password"
            id="password"
            onchange={onchangeHandlng}
            required={true}
          />
          <Button
            type="submit"
            variant="outlined"
            color="success"
            sx={{ width: "100%", marginTop: "15px" }}
          >
            Register Now
          </Button>
        </Paper>
      </Stack>
    </div>
  );
}
