import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Paper
} from "@mui/material";
import React, { useState } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
import { styled } from '@mui/material/styles';
import styles from "./MyStyle.module.css";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Step2 = () => {
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
      <Box className={styles.BoxStyle}>
        <Typography textAlign="center" variant="h4" padding={3}>
          Tack för att registerade mätaren
        </Typography>

        <Box sx={{ width: '90%',  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>5</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>6</Item>
        </Grid>
      </Grid>
    </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} alignItems="start">
            <Grid item xs={8}>
              <Typography>name</Typography>
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
            </Grid>

            <Grid item xs={4}>
              <Typography>date</Typography>
              <TextField
                onChange={handleChangeState}
                name="email"
                type={"email"}
                value={input.email}
                variant="outlined"
                placeholder="Email :"
                margin="normal"
              />
            </Grid>
          </Grid>
        </Box>

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
        <Button onClick={handleResetState} variant="outlined" fullWidth>
          AVBRYT
        </Button>

        <br />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Grid item marginTop={2} marginBottom={3}></Grid>
      </Box>
    </form>
  );
};

export default Step2;
