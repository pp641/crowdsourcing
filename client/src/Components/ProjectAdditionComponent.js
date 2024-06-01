import {
  Box,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Fab,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import AddIcon from "@mui/icons-material/Add";
import { postData } from "../utils/restApiTemplates";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "80%",
    margin: "20px 0",
  },
}));

const ProjectAdditionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const classes = useStyles();

  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChangeCategory = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleChangeStatus = (event, newValue) => {
    setSelectedStatus(newValue);
  };

  const handleAddLink = () => {
    if (link && /^https?:\/\/\S+$/.test(link)) {
      setLinks([...links, link]);
      setLink("");
    } else {
      alert("Please enter a valid URL");
    }
  };

  const Category = [
    { title: "Tech" },
    { title: "Art" },
    { title: "Music" },
    { title: "Film" },
    { title: "Music" },
    { title: "Gaming" },
    { title: "Education" },
    { title: "Other" },
  ];

  const ProjectStatus = [
    { title: "Active" },
    { title: "Open For Funding" },
    { title: "Inactive" },
    { title: "Archived" },
  ];

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    category: "",
    links: [],
    status: "",
  });

  const isFormValid = Object.keys(projectData)
    .filter((field) => !["links", "status", "category"].includes(field))
    .every((field) => projectData[field].length > 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      projectData.category = selectedCategory;
      projectData.status = selectedStatus;
      projectData.links = links;
      setProjectData(projectData);
      const result = await postData('/api/createProject',projectData , localStorage.getItem('token'));
      console.log("ok", result.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleChange = (e) => {
    console.log("first", projectData, e.target.value, e.target.id);
    setProjectData({
      ...projectData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 3 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={projectData.title}
        id="title"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        onChange={handleChange}
        label="Project Title"
        variant="outlined"
      />

      <TextField
        className={classes.textField}
        label="Project Description"
        id="description"
        value={projectData.description}
        onChange={handleChange}
        multiline
        rows={10}
        variant="outlined"
        placeholder="Enter your long text here"
      />

      <Autocomplete
        freeSolo
        id="category"
        disableClearable
        onChange={handleChangeCategory}
        value={selectedCategory}
        options={Category.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Project Category"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />

      <Autocomplete
        freeSolo
        id="status"
        disableClearable
        value={selectedStatus}
        onChange={handleChangeStatus}
        options={ProjectStatus.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Project Status"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <TextField
        label="Add Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Fab color="primary" aria-label="add" onClick={handleAddLink}>
        <AddIcon />
      </Fab>
      <List>
        {links.map((link, index) => (
          <ListItem key={index}>
            <ListItemText primary={link} />
          </ListItem>
        ))}
      </List>
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

export default ProjectAdditionComponent;
