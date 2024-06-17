import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser, registerUser } from '../Redux/ActionDetails/AuthAction';
import { useNavigate } from 'react-router-dom';

const SigninComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const  {auth}  =  useSelector((state) => state);


    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
  
  

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
          const result =  await dispatch(LoginUser(formData));
          console.log("okfront", result);
          if(result.token !== undefined && result.userId !== undefined ){
                    navigate("/")
                    window.location.reload();
          }
          if (result) {
            setFormData({
              email : "",
              password: ""
            })
            console.log('Login successful:', result);
          }
        } catch (error) {
          console.error('Login failed:', error);
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
        value={formData.email}
        id="email"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        onChange={handleChange}
        label="Username or Email"
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
  )
}

export default SigninComponent