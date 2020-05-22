import React, { useState, useCallback } from "react";

import {
  TextField,
  makeStyles,
  Button,
  Paper,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../../../core/redux/auth/authActions";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minWidth: "350px",
      maxWidth: "70%",
      padding: theme.spacing(3, 3),
      display: "flex",
      flexDirection: "column",
      backgroundColor: "rgba(255,255,255,0.6)",
    },
    submitButton: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      backgroundColor: "#AC3B61",
      color: "#EEE2DC",
      "&:hover": {
        color: "#000000",
        backgroundColor: "BAB2B5",
      },
    },
    register: {
      color: "#AC3B61",
      fontSize: "13px",
    },
  }),
  {
    name: "RegisterForm",
  }
);

const mapStateToProps = (state) => ({
  isOpen: state.auth.open,
});

const mapDispatchToProps = {
  register,
};

const RegisterForm = ({ register, isOpen }) => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const classes = useStyles();

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      register(credentials);
    },
    [credentials, register]
  );

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <Typography>Register Panel</Typography>
      <TextField
        required
        label="Name"
        value={credentials.name}
        name="firstName"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Surname"
        value={credentials.surname}
        name="lastName"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Email"
        value={credentials.email}
        name="email"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Password"
        type="password"
        value={credentials.password}
        name="password"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        label="Confirm password"
        type="password"
        value={credentials.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
        variant="outlined"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        className={classes.submitButton}
      >
        Submit
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/" variant="body2" className={classes.register}>
            {"Have already an account? Login"}
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
