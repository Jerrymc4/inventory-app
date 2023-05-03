import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ItemContext from "./context/ItemContext";
import { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { theme } from "../Theme";
// import { TextField } from "@mui/material";

const Items = ({
  category,
  name,
  quantity,
  location,
  color,
  date,
  serialNumber,
  nsnNumber,
  expirationDate,
  note,
  icon,
  handleDoubleClick,
  handleBlur,
  isEditing,
}) => {
  const [expanded, setExpanded] = useState(false);
  // const { handleDelete } = useContext(ItemContext);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <TransitionGroup>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          square={true}
          sx={{
            height: "fit-content",
            borderBottom: "1px solid lightGrey",
            width: "100%",
            bgcolor: theme.palette.background.grey[100],
            boxShadow: " 5px 5px 10px lightGrey",
            ":hover": {
              cursor: "pointer",
              bgcolor: theme.palette.background.grey[300],
              color: theme.palette.text.white,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            {/* CONTAINER BOX */}
            <Box
              // border="1px solid red"
              width={1}
              height="fit-content"
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              {/* TITLE BOX */}
              <Box
                width={1}
                display="flex"
                alignItems="center"
                // border="1px solid red"
                justifyContent="space-between"
              >
                {/* BOX THAT GROUPS COLOR AND CATEGORY */}
                <Box display="flex" alignItems="center">
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: color,
                      borderRadius: 100,
                      marginRight: "10px",
                    }}
                  ></div>
                  <Typography
                    variant="h5"
                    sx={{
                      flexShrink: 0,
                      color: theme.palette.background.grey[700],
                      // marginRight: 3,
                    }}
                  >
                    {category}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  color={theme.palette.background.grey[500]}
                  sx={{
                    ml: 8,
                  }}
                >
                  {date}
                </Typography>
              </Box>
              {/* BOX GROUP FOR NAME AND ICONS */}
              <Box
                // border="1px solid black"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4" sx={{ color: color }}>
                  {name}
                </Typography>
                <Box
                  width={70}
                  // border="1px solid red"
                  height={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  {icon}
                </Box>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ minHeight: "fitContent" }}>
            <Box
              width={1}
              display="flex"
              flexDirection="column"
              gap={4}
              pt={4}
              // border="1px solid red"
            >
              <Typography
                variant="h4"
                color={theme.palette.background.grey[600]}
              >
                Name:
                <span
                  style={{
                    marginLeft: "10px",
                    color: theme.palette.background.grey[600],
                    fontWeight: "400",
                  }}
                >
                  {name}
                </span>
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.background.grey[600]}
              >
                Location:
                <span
                  style={{
                    marginLeft: "10px",
                    color: theme.palette.background.grey[600],
                    fontWeight: "400",
                  }}
                >
                  {location}
                </span>
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.background.grey[600]}
              >
                Quantity:
                <span
                  style={{
                    marginLeft: "10px",
                    color: theme.palette.background.grey[600],
                    fontWeight: "400",
                  }}
                >
                  {quantity}
                </span>
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.background.grey[600]}
              >
                Serial Number:
                <span
                  style={{
                    marginLeft: "10px",
                    color: theme.palette.background.grey[600],
                    fontWeight: "400",
                  }}
                >
                  {serialNumber}
                </span>
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.background.grey[600]}
              >
                NSN Number:
                <span
                  style={{
                    marginLeft: "10px",
                    color: theme.palette.background.grey[600],
                    fontWeight: "400",
                  }}
                >
                  {nsnNumber}
                </span>
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.background.grey[600]}
              >
                Expiration Date:
                <span
                  style={{
                    marginLeft: "10px",
                    color: theme.palette.background.grey[600],
                    fontWeight: "400",
                  }}
                >
                  {expirationDate}
                </span>
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography
                variant="h4"
                color={theme.palette.background.grey[600]}
              >
                Note:
                <div
                  style={{
                    // border: "1px solid red",
                    maxWidth: 400,
                    minHeight: "fitContent",
                    // overflow: "scroll",
                    overflowWrap: "anywhere",
                    marginTop: "10px",
                    fontWeight: 400,
                    backgroundColor: theme.palette.background.grey[200],
                    borderRadius: 10,
                    padding: 20,
                  }}
                >
                  {note}
                </div>
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </TransitionGroup>{" "}
    </>
  );
};

export default Items;
