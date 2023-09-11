import * as React from "react";
import {
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import ColumnList from "./ColumnList";

function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Column(prop) {
  return (
    <React.Fragment>
      <CssBaseline>
        <Grid
          xs={2.4}
          sx={{
            overflowY: "scroll",
            height: "71vh",
            marginTop: "10px",
          }}
        >
          <ElevationScroll {...prop}>
            <AppBar
              sx={{
                position: "sticky",
                zIndex: 80,
                backgroundImage:
                  "linear-gradient(65deg, #251757, #250f6e, #160b3c)",
                borderRadius: "3px",
              }}
            >
              <Toolbar>
                <Typography variant='body1' component='div'>
                  {prop.heading}({prop.ColumnObject.CardDetails.length})
                </Typography>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <ColumnList CardObject={prop.ColumnObject}></ColumnList>
        </Grid>
      </CssBaseline>
    </React.Fragment>
  );
}
