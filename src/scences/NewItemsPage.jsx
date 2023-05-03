import {
  Box,
  ThemeProvider,
  Typography,
  TextField,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import { theme } from "../Theme";
import { useContext, React, useState } from "react";
import CategoryContext from "../components/context/CategoryContext";
import ItemContext from "../components/context/ItemContext";

const NewItemsPage = () => {
  const { categoryColor, categories } = useContext(CategoryContext);

  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
  };
  const handleHoverLeave = () => {
    setIsHovering(false);
  };

  const {
    name,
    location,
    quantity,
    nsnNumber,
    serialNumber,
    expirationDate,
    note,
    category,
    color,
    setColor,
    setName,
    setLocation,
    setQuantity,
    setNsn,
    setSetSerialNum,
    setExpirationDate,
    setNote,
    handleCategoryChange,
    handleSubmit,
  } = useContext(ItemContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Paper
            elevation={isHovering ? 10 : 0}
            onMouseOver={handleHover}
            onMouseLeave={handleHoverLeave}
            sx={{
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            <Box
              sx={{
                width: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
                // border: "1px solid red",
                position: "relative",
                top: 20,
              }}
            >
              <Typography variant="h2"> Create New Item </Typography>{" "}
            </Box>{" "}
            <Box
              sx={{
                width: 1,
                height: 60,
                marginTop: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                justifyContent: "center",
                position: "relative",
                top: 40,
              }}
            >
              <FormControl
                variant="standard"
                size="small"
                sx={{
                  minWidth: 170,

                  color: theme.palette.background.main[500],
                }}
              >
                <InputLabel id="category-color"> Color </InputLabel>{" "}
                <Select
                  variant="standard"
                  labelId="category-color"
                  label="color"
                  value={color}
                  id="cat-color"
                  onChange={(e) => setColor(e.target.value)}
                  displayEmpty
                >
                  {" "}
                  {categoryColor.map((color, idx) => {
                    return (
                      <MenuItem value={color} key={idx}>
                        <Typography
                          style={{
                            width: 18,
                            height: 18,
                            background: color,
                            borderRadius: 100,
                          }}
                        >
                          {" "}
                        </Typography>{" "}
                      </MenuItem>
                    );
                  })}{" "}
                </Select>{" "}
              </FormControl>{" "}
              <FormControl
                variant="standard"
                size="small"
                sx={{
                  minWidth: 170,
                  color: theme.palette.background.main[500],
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  {" "}
                  Category{" "}
                </InputLabel>{" "}
                <Select
                  variant="standard"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategoryChange}
                  label="Age"
                  displayEmpty
                >
                  {" "}
                  {categories.map((cat, idx) => {
                    return (
                      <MenuItem key={idx} value={cat}>
                        {" "}
                        {cat}{" "}
                      </MenuItem>
                    );
                  })}{" "}
                </Select>{" "}
              </FormControl>{" "}
            </Box>{" "}
            <Box
              sx={{
                width: 1,
                height: "fit-content",
                mt: 8,
                // border: "1px solid red",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="form"
                sx={{
                  width: 0.45,
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  // border: "1px solid red",
                }}
              >
                <TextField
                  id="item-search"
                  variant="standard"
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="small"
                  color="success"
                  sx={{
                    marginTop: 1.5,
                    marginBottom: 1,
                  }}
                />{" "}
                <TextField
                  id="item-search"
                  variant="standard"
                  label="Location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  size="small"
                  color="success"
                  sx={{
                    marginTop: 1.5,
                    marginBottom: 1,
                  }}
                />{" "}
                <TextField
                  id="item-search"
                  variant="standard"
                  label="Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  size="small"
                  color="success"
                  sx={{
                    marginTop: 1.5,
                    marginBottom: 1,
                  }}
                />{" "}
              </Box>{" "}
              <Box
                sx={{
                  width: 0.45,
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <TextField
                  id="item-search"
                  variant="standard"
                  label="Serial Number"
                  name="serialNumber"
                  value={serialNumber}
                  onChange={(e) => setSetSerialNum(e.target.value)}
                  size="small"
                  color="success"
                  sx={{
                    marginTop: 1.5,
                    marginBottom: 1,
                  }}
                />{" "}
                <TextField
                  id="item-search"
                  variant="standard"
                  label="NSN Number"
                  name="nsnNumber"
                  value={nsnNumber}
                  onChange={(e) => setNsn(e.target.value)}
                  size="small"
                  color="success"
                  sx={{
                    marginTop: 1.5,
                    marginBottom: 1,
                  }}
                />{" "}
                <TextField
                  id="item-search"
                  variant="standard"
                  label="Expiration Date"
                  name="expirationDate"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  size="small"
                  color="success"
                  sx={{
                    marginTop: 1.5,
                    marginBottom: 1,
                  }}
                />{" "}
              </Box>{" "}
            </Box>{" "}
            <Box
              sx={{
                width: 1,
                height: 190,

                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                variant="standard"
                multiline
                label="Note"
                name="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Make a Note"
                rows={3}
                sx={{
                  width: 1,
                }}
              />{" "}
              <Button
                variant="text"
                size="large"
                onClick={handleSubmit}
                sx={{
                  ":hover": {
                    backgroundColor: theme.palette.background.main[500],
                    color: theme.palette.text.white,
                  },
                  width: 300,
                }}
              >
                {" "}
                <Typography variant="h4" type="">
                  {" "}
                  Add Item{" "}
                </Typography>{" "}
              </Button>{" "}
            </Box>{" "}
          </Paper>
        </Container>{" "}
      </ThemeProvider>{" "}
    </>
  );
};

export default NewItemsPage;
