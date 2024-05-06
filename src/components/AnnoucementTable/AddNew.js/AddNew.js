import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Input,
} from "@mui/material";
import Dashboard from "../../../page/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { addData } from "../../../redux/slices/allData";
import { dataArray, imageComponents } from "../../../utils";

const AddNew = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    photo: null,
    content: "",
    status: "",
    username: "",
    createdDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleAdd = () => {
    if (formData.photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        dispatch(addData({ ...formData, photo: base64String }));
        // Reset the form regardless of successful image upload
        setFormData({
          photo: null,
          content: "",
          status: "",
          username: "",
          createdDate: "",
        });
      };
      reader.readAsDataURL(formData.photo);
    } else {
      dispatch(addData(formData));
      // Reset the form
      setFormData({
        photo: null,
        content: "",
        status: "",
        username: "",
        createdDate: "",
      });
    }
  };

  // Assuming data is one of the objects in dataArray
  const data = dataArray[0];
  const imageComponent = imageComponents[data.photo];

  return (
    <Dashboard>
      <Grid container spacing={2} sx={{ padding: "24px" }}>
        <Grid item xs={12}>
          <Typography variant="h6">Add New Data</Typography>
        </Grid>
        <Grid item xs={12} className="form-control">
          <FormControl fullWidth>
            <Input
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="file"
              id="photo-input"
              name="photo"
              onChange={handleFileChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {formData && (
            <TextField
              fullWidth
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Content"
              name="content"
              type="text"
              value={formData.content}
              onChange={handleInputChange}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {formData && (
            <TextField
              fullWidth
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Status"
              name="status"
              type="text"
              value={formData.status}
              onChange={handleInputChange}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {formData && (
            <TextField
              fullWidth
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {formData && (
            <TextField
              fullWidth
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Created Date"
              type="datetime-local"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add Data
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

export default AddNew;
