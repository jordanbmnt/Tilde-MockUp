import { List, ListItem } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function ColumnList({ CardObject }) {
  return (
    <List
      sx={{
        display: "flex",
        flexFlow: "column",
        paddingBottom: "30px",
      }}
    >
      {CardObject.CardDetails.map((card) => (
        <ListItem>
          <ProjectCard CardInfo={card}></ProjectCard>
        </ListItem>
      ))}
    </List>
  );
}
