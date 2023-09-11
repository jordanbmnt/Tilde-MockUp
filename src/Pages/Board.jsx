import { Box, Grid } from "@mui/material";
import CardInfo from "../Database/CardInfo";
import Column from "../Components/Column";

function Board() {
  const headings = [
    "Backlog",
    "In Progress",
    "Review Feedback",
    "Review",
    "Complete",
  ];
  return (
    <Box
      className='Board'
      sx={{
        width: "94.3vw",
        height: "70vh",
        overflowY: "hidden",
        boxShadow: " 5px 8px 17px #22125634",
      }}
    >
      <Grid
        sx={{
          width: "1450px",
        }}
        container
        spacing={3}
      >
        {headings.map((heading, i) => (
          <Column heading={heading} ColumnObject={CardInfo[i]}></Column>
        ))}
      </Grid>
    </Box>
  );
}

export default Board;
