import { Info } from "phosphor-react";
import { Container, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#170a43",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "left",
  color: "#fff",
  boxShadow: "5px 10px 10px 1px rgba(0, 0, 0, 0.078)",
}));

export default function EventItem() {
  return (
    <Item>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='body1'> GIT PUSH</Typography>
        <Typography variant='p'> 10:58:42</Typography>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='body2'> Tilde Mockups</Typography>
        <Info size={26}></Info>
      </Container>
    </Item>
  );
}
