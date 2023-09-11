import { Container, Stack, Typography } from "@mui/material";
import EventItem from "./EventItem";

export default function EventLog() {
  return (
    <Container
      sx={{
        margin: "20px 0",
        width: "100vw",
      }}
    >
      <Typography
        variant='h4'
        sx={{
          color: "white",
          padding: "10px",
        }}
      >
        Event Log
      </Typography>
      <Stack spacing={1}>
        <EventItem></EventItem>
        <EventItem></EventItem>
        <EventItem></EventItem>
        <EventItem></EventItem>
        <EventItem></EventItem>
        <EventItem></EventItem>
      </Stack>
    </Container>
  );
}
