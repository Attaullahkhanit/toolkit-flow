import React, { useState } from "react";
import Dashboard from "../page/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { setHomeData } from "../redux/slices/homeslice";


function Home() {
  const dispatch = useDispatch();
  const getDatafromRTK = useSelector(state => state);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setHomeData(formData));
    // Reset the form or perform any other actions after submission
  };
  return (
    <Dashboard>
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField
          className="home-input-field"
          placeholder="Name"
          // variant="outlined"
          margin="normal"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          placeholder="Email"
          className="home-input-field"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          placeholder="Password"
          className="home-input-field"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Dashboard>
  );
}

export default Home;
