import {
  User,
  Presentation,
  ChartLine,
  Gauge,
  Hand,
  Atom,
} from "phosphor-react";
import { Tooltip, IconButton, Link } from "@mui/material";

export default function NavBar() {
  return (
    <div className='Nav-Bar'>
      <Link href='/profile' className='Nav-Option, Profile'>
        <User size={32} color='white' />
      </Link>
      <Link href='/' className='Nav-Option'>
        <Tooltip title='My Board' placement='right'>
          <IconButton>
            <Presentation color='white' />
          </IconButton>
        </Tooltip>
      </Link>
      <Link href='/actions' className='Nav-Option'>
        <Tooltip title='Actions' placement='right'>
          <IconButton>
            <ChartLine color='white' />
          </IconButton>
        </Tooltip>
      </Link>
      <Link href='/review-performance' className='Nav-Option'>
        <Tooltip title='Review Performance' placement='right'>
          <IconButton>
            <Gauge color='white' />
          </IconButton>
        </Tooltip>
      </Link>
      <Link
        target={"_blank"}
        href='https://umuzi.hesk.com/'
        className='Nav-Option'
      >
        <Tooltip title='Hesk' placement='right'>
          <IconButton>
            <Hand color='white' />
          </IconButton>
        </Tooltip>
      </Link>
      <Link
        target={"_blank"}
        href='https://sites.google.com/umuzi.org/umuzi-recruits-home/whats-news?authuser=0&pli=1'
        className='Nav-Option'
      >
        <Tooltip title='Umuzi' placement='right'>
          <IconButton>
            <Atom color='white' />
          </IconButton>
        </Tooltip>
      </Link>
    </div>
  );
}
