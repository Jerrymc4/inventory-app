import {
  Box,
  Button,
  Collapse,
  FormControl,
  ThemeProvider,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { theme } from "../../Theme";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CategoryContext from "../../components/context/CategoryContext";
import { TransitionGroup } from "react-transition-group";
import { useContext, useEffect, useState } from "react";
import ItemContext from "../../components/context/ItemContext";

const Sidebar = () => {
  const {
    categories,
    input,
    open,
    handleClickOpen,
    handleClose,
    addNewCategory,
    handleSave,
    handleDeleteCategory,
  } = useContext(CategoryContext);

  const [categoryCounts, setCategoryCounts] = useState([{}]);

  const { items } = useContext(ItemContext);

  // gets count of each item in a category
  useEffect(() => {
    const counts = {};
    items.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    setCategoryCounts(counts);
  }, [items]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 260,
          height: 1,
          backgroundColor: theme.palette.background.main[500],
          display: "flex",
          overflow: "scroll",
          pr: "10px",
          pl: "10px",
          transition: "all ease-in 0.3s",
          // border: "1px solid black",
        }}
      >
        <Box
          // border="1px solid blue"
          mt={4}
          width={240}
          display="flex"
          flexDirection="column"
        >
          <Box
            // border="1px solid red"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={1}
            height="60px"
          >
            <Typography variant="h3" color={theme.palette.text.white}>
              Categories{" "}
            </Typography>{" "}
            <Tooltip title="Add a New Category">
              <IconButton onClick={handleClickOpen}>
                <AddIcon
                  sx={{
                    color: theme.palette.text.white,
                    // marginRight: 2,
                    cursor: "pointer",
                    // borderRadius: 2,

                    ":hover": {
                      color: theme.palette.text.secondary,
                    },
                  }}
                />{" "}
              </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} fullWidth>
              <DialogTitle> Add New Category </DialogTitle>{" "}
              <FormControl type="submit">
                <DialogContent>
                  <TextField
                    autoFocus
                    // margin="normal"
                    id="name"
                    // color={theme.palette.background.grey[800]}
                    label="Category Name"
                    value={input}
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleSave}
                  />{" "}
                </DialogContent>{" "}
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                      backgroundColor: theme.palette.background.main[500],
                      ":hover": {
                        backgroundColor: theme.palette.background.main[600],
                      },
                    }}
                  >
                    Cancel{" "}
                  </Button>{" "}
                  <Button
                    variant="contained"
                    onClick={addNewCategory}
                    type="submit"
                    sx={{
                      backgroundColor: theme.palette.background.main[500],
                      ":hover": {
                        backgroundColor: theme.palette.background.main[600],
                      },
                    }}
                  >
                    Add Category{" "}
                  </Button>{" "}
                </DialogActions>{" "}
              </FormControl>{" "}
            </Dialog>{" "}
          </Box>{" "}
          <Box
            // border="1px solid red"
            display="flex"
            flexDirection="column"
          >
            {" "}
            <TransitionGroup>
              {" "}
              {categories
                .filter((category) => {
                  return category !== "";
                })
                .map((category, i) => {
                  return (
                    <Collapse key={i}>
                      <Typography
                        variant="h5"
                        width="100%"
                        key={i}
                        sx={{
                          marginBottom: "35px",
                          marginTop: "10px",
                          color: theme.palette.text.secondary,
                          // border: "1px solid black",
                          cursor: "pointer",
                          display: "flex",
                          padding: "10px 10px 10px 5px",
                          alignItems: "center",
                          justifyContent: "space-between",
                          ":hover": {
                            background: theme.palette.background.main[700],
                            color: theme.palette.text.white,
                            padding: "10px 10px 10px 5px",
                            borderRadius: "10px",
                          },
                        }}
                      >
                        {" "}
                        {category}{" "}
                        <Box
                          width={60}
                          // border="1px solid white"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-around"
                        >
                          <span
                            style={{
                              color: theme.palette.text.white,
                            }}
                          >
                            {" "}
                            {categoryCounts[category] || ""}{" "}
                          </span>{" "}
                          <Tooltip title="Delete Category. Cannot be undone.">
                            <DeleteIcon
                              onClick={() => handleDeleteCategory(category)}
                              sx={{
                                ":hover": {
                                  color: theme.palette.abort.red[500],
                                },
                              }}
                            />
                          </Tooltip>
                        </Box>
                      </Typography>{" "}
                    </Collapse>
                  );
                })}{" "}
            </TransitionGroup>{" "}
          </Box>{" "}
        </Box>{" "}
      </Box>{" "}
    </ThemeProvider>
  );
};

export default Sidebar;
