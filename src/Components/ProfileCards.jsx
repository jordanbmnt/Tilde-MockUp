import {
  Avatar,
  Box,
  Stack,
  Tooltip,
  Typography,
  Paper,
  styled,
} from "@mui/material";
import {
  EnvelopeOpen,
  GithubLogo,
  LinkedinLogo,
  Trophy,
  ClockCounterClockwise,
  File,
  Handshake,
  Suitcase,
} from "phosphor-react";
import { Link } from "react-router-dom";

const ProfileCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: "flex",
  flexFlow: "column",
  color: "#655696",
  width: "380px",
  height: "470px",
  boxSizing: "border-box",
  borderRadius: "7px",
  backgroundImage: "linear-gradient(65deg, #090221, #100632,#090221)",
  position: "relative",
  border: "1px solid #322361",
  boxShadow: "1px 5px 10px 2px #091221",
  justifyContent: "start",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    scale: "0.9",
  },
  [theme.breakpoints.down("sm")]: {
    scale: "0.77",
  },
}));

export const UserCard = () => {
  return (
    <ProfileCard>
      <Avatar sx={{ width: 100, height: 100, bgcolor: "#324361" }}>J</Avatar>
      <Box
        sx={{
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        <Typography sx={{ margin: "5px 0" }} variant='h4'>
          Jordan Beaumont
        </Typography>
        <Typography variant='body2'>Web Developer</Typography>
      </Box>
      <Typography
        sx={{
          marginBottom: "10px",
          maxHeight: "180px",
          overflowY: "scroll",
          padding: "1px 5px",
        }}
        variant='body1'
      >
        Hi there! I am a passionate and experienced web developer with a keen
        eye for detail and a strong commitment to delivering high-quality work.
        I have a solid background in web development, including proficiency in
        multiple programming languages and frameworks. I thrive on challenges
        and enjoy working collaboratively with clients to bring their visions to
        life. With a strong focus on user experience, I am dedicated to creating
        websites that are not only visually appealing, but also easy to navigate
        and use. When I'm not coding, I enjoy staying up-to-date with the latest
        web development trends and technologies. Let's work together to create
        something amazing!
      </Typography>
      <Stack direction='row' spacing={4}>
        <Link>
          <Tooltip title='Github' placement='bottom'>
            <GithubLogo size={30}></GithubLogo>
          </Tooltip>
        </Link>
        <Link>
          <Tooltip title='Email' placement='bottom'>
            <EnvelopeOpen size={30}></EnvelopeOpen>
          </Tooltip>
        </Link>
        <Link>
          <Tooltip title='LinkedIn' placement='bottom'>
            <LinkedinLogo size={30}></LinkedinLogo>
          </Tooltip>
        </Link>
        <Link>
          <Tooltip title='Achievements' placement='bottom'>
            <Trophy size={30}></Trophy>
          </Tooltip>
        </Link>
      </Stack>
    </ProfileCard>
  );
};

export const WorkCard = () => {
  return (
    <ProfileCard>
      <Avatar sx={{ width: 100, height: 100, bgcolor: "#324361" }}>
        <Suitcase color='white' size={40}></Suitcase>
      </Avatar>
      <Box
        sx={{
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        <Typography sx={{ margin: "5px 0" }} variant='h4'>
          Internship
        </Typography>
        <Typography variant='body2'>BBD Software</Typography>
      </Box>
      <Typography
        sx={{
          marginBottom: "10px",
          maxHeight: "180px",
          overflowY: "scroll",
          padding: "1px 5px",
        }}
        variant='body1'
      >
        Testimonials: <br /> I had the pleasure of working with Jordan on a
        recent project and I can confidently say that they are a skilled and
        professional developer. Throughout the project, they were incredibly
        responsive and always willing to go above and beyond to ensure that our
        website was not only functional, but also visually appealing and
        user-friendly. Their attention to detail and commitment to delivering
        high-quality work is truly impressive. I would highly recommend Jordan
        to anyone in need of a talented web developer.
      </Typography>
      <Stack direction='row' spacing={4}>
        <Link>
          <Tooltip title='CV' placement='bottom'>
            <File size={30}></File>
          </Tooltip>
        </Link>
        <Link>
          <Tooltip title='Employment History' placement='bottom'>
            <ClockCounterClockwise size={30}></ClockCounterClockwise>
          </Tooltip>
        </Link>
        <Link>
          <Tooltip title='Hire Me' placement='bottom'>
            <Handshake color='limegreen' size={30}></Handshake>
          </Tooltip>
        </Link>
      </Stack>
    </ProfileCard>
  );
};
