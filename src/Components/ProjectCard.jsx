import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Eye, Info, Play } from "phosphor-react";

export default function ProjectCard({ CardInfo }) {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Card className='card'>
        <React.Fragment>
          <CardContent
            sx={{
              paddingLeft: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "0.5rem", color: "white" }}
              color='text.secondary'
              gutterBottom
            >
              {CardInfo.ExtraInfo}
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "white" }}
              component='div'
            >
              {CardInfo.CardTitle}
            </Typography>
            <Typography
              sx={{ mb: 1.5, fontSize: "0.6rem", color: "white" }}
              color='text.secondary'
            ></Typography>
            <Typography
              sx={{ fontSize: "0.7rem", color: "white", fontWeight: "bold" }}
              variant='body2'
            >
              Reviewers:
              <br />
            </Typography>
            <Typography
              sx={{
                fontSize: "0.6rem",
                color: "whitesmoke",
                listStyle: "none",
                paddingLeft: "5px",
              }}
              variant='body2'
              component='ul'
            >
              {typeof CardInfo.ReviewerList !== "string"
                ? CardInfo.ReviewerList.map((reviewer) => <li>{reviewer}</li>)
                : "No Reviewers"}
            </Typography>
          </CardContent>
          <Stack
            spacing={0.5}
            justifyContent='flex-start'
            sx={{
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            <Button
              variant='outlined'
              sx={{ fontSize: "0.5rem", alignSelf: "start" }}
            >
              <Play size={15}></Play>
              Start Topic
            </Button>
            <Button
              variant='outlined'
              sx={{ fontSize: "0.5rem", alignSelf: "start" }}
            >
              <Eye size={15}></Eye>
              View Content
            </Button>
            <Button
              variant='outlined'
              sx={{ fontSize: "0.5rem", alignSelf: "start" }}
            >
              <Info size={15}></Info>
              Details
            </Button>
          </Stack>
        </React.Fragment>
      </Card>
    </Box>
  );
}
