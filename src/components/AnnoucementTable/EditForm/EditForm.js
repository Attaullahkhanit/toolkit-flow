import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography, FormControl, Input } from "@mui/material";
import Dashboard from "../../../page/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { updateContent } from "../../../redux/slices/allData";
import { dataArray, imageComponents } from "../../../utils";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  const [formData, setFormData] = useState({
    photo: null,
    content: "",
    status: "",
    username: "",
    createdDate: "",
  });

  useEffect(() => {
    // Assuming data is one of the objects in dataArray
    const data = dataArray.find((item) => item.id === parseInt(id));
    setFormData({
      photo: data.photo, // You may want to update the logic to handle different data types for 'photo'
      content: data.content,
      status: data.status,
      username: data.username,
      createdDate: data.createdDate,
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };
  

  const handleUpdate = () => {
    dispatch(
      updateContent({
        id: parseInt(id),
        newContent: formData.content,
        // Add other fields you want to update
      })
    );
    

    // Reset the form if needed
    setFormData({
      photo: null,
      content: "",
      status: "",
      username: "",
      createdDate: "",
    });
  };

  // Assuming data is one of the objects in dataArray
  const data = dataArray.find((item) => item.id === parseInt(id));
  const imageComponent = imageComponents[data.photo];

  return (
    <Dashboard>
      <Grid container spacing={2} sx={{ padding: "24px" }}>
        <Grid item xs={12}>
          <Typography variant="h6">Edit Data</Typography>
        </Grid>
        <Grid item xs={12} className="form-control">
          <FormControl fullWidth sx={{ height: '80px' }}>
            <Input
              sx={{ bgcolor: 'white', borderRadius: '5px' }}
              type="file"
              id="photo-input"
              name="photo"
              onChange={handleFileChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            sx={{ bgcolor: 'white', borderRadius: '5px' }}
            placeholder="Content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            sx={{ bgcolor: 'white', borderRadius: '5px' }}
            placeholder="Status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            sx={{ bgcolor: 'white', borderRadius: '5px' }}
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            sx={{ bgcolor: 'white', borderRadius: '5px' }}
            placeholder="Created Date"
            type="datetime-local"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update Data
          </Button>
        </Grid>
        {/* Render the image component */}
        <Grid item xs={12}>
          <div>{imageComponent}</div>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default EditForm;
