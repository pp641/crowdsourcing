import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/ActionDetails/AuthAction";
import { openSnackbar, showSuccessMessage } from "../Redux/ActionDetails/AlertAction";
import CustomizedSnackbars from "./SnackBarComponent";

const SignupComponent = () => {

  const dispatch = useDispatch();

  const  {auth}  =  useSelector((state) => state);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

//   const handleSubmit =  async  (e) => {
//     e.preventDefault();
//     if(isFormValid) { 
//     const response =  await dispatch(registerUser(formData));
//     <CustomizedSnackbars/>
//      setFormData({
//       firstName: "",
//       lastName: "",
//       userName: "",
//       email: "",
//       password: "",
//      });
//   }
  
// }

const handleSubmit =  async (e) => {
  e.preventDefault();
  try {
    const result =  await dispatch(registerUser(formData));
    if (result) {
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
      })
      console.log('Signup successful:', result);
    }
  } catch (error) {
    console.error('Signup failed:', error);
  }
};



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const isFormValid = Object.values(formData).every(
    (field) => field.length > 0
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
    onSubmit={handleSubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 3, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="firstName"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        value={formData.firstName}
        onChange={handleChange}
        label="First Name"
        variant="outlined"
      />
      <TextField
        id="lastName"
        value={formData.lastName}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        onChange={handleChange}
        label="Last Name"
        variant="outlined"
      />
      <TextField
        value={formData.userName}
        id="userName"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        onChange={handleChange}
        label="Username"
        variant="outlined"
      />
      <TextField
        value={formData.email}
        id="email"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        onChange={handleChange}
        label="Email"
        variant="outlined"
      />

      <TextField
        value={formData.password}
        id="password"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title={showPassword ? "Hide Password" : "Show Password"}>
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        label="Password"
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isFormValid}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SignupComponent;
