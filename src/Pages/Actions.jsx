import { Container } from "@mui/material";
import BurnChart from "./BurnChart";
import EventLog from "../Components/EventLog";

export default function Actions() {
  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "column",
        marginTop: "20px",
        alignItems: "center",
      }}
    >
      <BurnChart></BurnChart>
      <EventLog></EventLog>
    </Container>
  );
}
