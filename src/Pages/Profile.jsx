import { styled } from "@mui/material";
import { UserCard, WorkCard } from "../Components/ProfileCards";

export default function Profile() {
  const Root = styled("div")(({ theme }) => ({
    flexFlow: "row",
    [theme.breakpoints.down("lg")]: {
      flexFlow: "column",
      margin: "22vh auto",
      justifyContent: "center",
      gap: "2em",
    },
    [theme.breakpoints.down("md")]: {
      gap: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
    },
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }));
  return (
    <Root>
      <UserCard></UserCard>
      <WorkCard></WorkCard>
    </Root>
  );
}
