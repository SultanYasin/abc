import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography,
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";

import styles from "./MyStyle.module.css";


const Form = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChangeState = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleResetState = (event) => {
    setIsSignup(!isSignup);
    setInput({ name: "", email: "", password: "", confirmPassword: "" });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={styles.BoxStyle} >

        <Typography textAlign="center" variant="h4" padding={3}>
          Tack för att registerade mätaren          
        </Typography>


          <TextField
            onChange={handleChangeState}
            name="name"           
            type={"text"}
            value={input.name}
            variant="outlined"
            placeholder="Name :"
            fullWidth
            margin="normal"
          />
 
        <TextField
          onChange={handleChangeState}
          name="email"
          type={"email"}
          value={input.email}
          variant="outlined"
          placeholder="Email :"
          margin="normal"
          fullWidth
        />
        <TextField
          onChange={handleChangeState}
          name="password"
          type={"password"}
          value={input.password}
          variant="outlined"
          placeholder="Password :"
          margin="normal"
          fullWidth
        />

        <Button
          endIcon={isSignup ? <HowToRegSharpIcon /> : <LoginSharpIcon />}
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          variant="contained"
        >
        REGISTERA
        </Button>
        <br />
        <Button
          onClick={handleResetState}
            variant="outlined"
            fullWidth
        >
            AVBRYT
        </Button>

        <br />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Grid item marginTop={2} marginBottom={3}>

        </Grid>
      </Box>
    </form>
  );
};

export default Form;

/*    display :"flex";
   flex-direction : "column";
   align-items : "center";
   max-width: "600px";
   margin: "auto";
   margin-top: "10%";
   border: "solid 0.5px";
   border-radius: "5";
   box-shadow: "5px 5px 7px  #ccc";
   gap: "4px"; */