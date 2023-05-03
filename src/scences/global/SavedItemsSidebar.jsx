import { useState, useContext } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  TextField,
  Button,
  Collapse,
  Tooltip,
} from "@mui/material";
import { theme } from "../../Theme";
import AddIcon from "@mui/icons-material/Add";
import Items from "../../components/Items";
import DeleteIcon from "@mui/icons-material/Delete";
import ItemContext from "../../components/context/ItemContext";
import { TransitionGroup } from "react-transition-group";

const SavedItemsSidebar = () => {
  const [search, setSearch] = useState("");

  const { items, handleDelete, handleValueChange } = useContext(ItemContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        width={380}
        height={1}
        overflow="auto"
        sx={{
          // width: 350,
          // height: 1,
          backgroundColor: theme.palette.background.grey[100],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          gap: 0,
          borderRight: "0.5px solid lightgrey",
          // border: "1px solid red",
        }}
      >
        <Box
          sx={{
            width: 1,
            padding: 2,
            height: 120,
            bgcolor: theme.palette.background.grey[100],
            borderBottom: "2px solid lightgrey",
            // marginBottom: 5,
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            top: 0,
            zIndex: 999,
            opacity: 1,
          }}
        >
          <Typography variant="h4" color={theme.palette.text.secondary}>
            {" "}
            Saved Items{" "}
          </Typography>{" "}
          <TextField
            id="item-search"
            variant="outlined"
            label="Search by name..."
            size="small"
            color="success"
            value={search}
            onChange={handleChange}
            sx={{
              marginTop: 1.5,
              maxWidth: 340,
            }}
          />{" "}
        </Box>{" "}
        <Box width={1}>
          <TransitionGroup>
            {items
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((item, idx) => {
                return (
                  <Collapse key={idx}>
                    <Items
                      onChange
                      key={idx}
                      color={item.color}
                      category={item.category}
                      name={item.name}
                      location={item.location}
                      quantity={item.quantity}
                      date={item.date}
                      serialNumber={item.serialNumber}
                      nsnNumber={item.nsnNumber}
                      expirationDate={item.expirationDate}
                      note={item.note}
                      icon={
                        <Tooltip title="Delete Item. This cannot be undone.">
                          <DeleteIcon
                            value={item}
                            onClick={() => handleDelete(item)}
                            sx={{
                              color: theme.palette.background.grey[500],
                              ":hover": {
                                color: theme.palette.abort.red[500],
                              },
                            }}
                          />
                        </Tooltip>
                      }
                    />{" "}
                  </Collapse>
                );
              })}{" "}
          </TransitionGroup>{" "}
        </Box>{" "}
      </Box>{" "}
    </ThemeProvider>
  );
};

export default SavedItemsSidebar;
