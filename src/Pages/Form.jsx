import { Button, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Input } from "../Components/Input";
import { Compare } from "../Components/Utils/Compare";
import { useNavigate } from "react-router-dom";
export function Form() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  // console.log(data)

  const onchangeHandling = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
  };
  const submitHandling = (e) => {
    e.preventDefault();
    // const { usernme, pasword } = data;
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (data.username == username && data.password == password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("incorrect Crenditial");
    }
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
            Login Form
          </Typography>
          <Input
            placeholder="Enter a username"
            type="text"
            id="username"
            required={true}
            onchange={onchangeHandling}
          />
          <Input
            placeholder="Enter a password"
            type="password"
            id="password"
            required={true}
            onchange={onchangeHandling}
          />
          <Button
            type="submit"
            variant="outlined"
            color="success"
            sx={{ width: "100%", marginTop: "15px" }}
          >
            Submit
          </Button>
        </Paper>
      </Stack>
    </div>
  );
}
