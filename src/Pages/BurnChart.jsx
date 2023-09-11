import { Paper } from "@mui/material";
import React from "react";
import Plot from "react-plotly.js";

export default function BurnChart() {
  return (
    <Paper
      sx={{
        backgroundColor: "#324361",
        borderRadius: "10px",
        padding: "10px",
        width: "80vw",
        overflowX: "scroll",
      }}
    >
      <Plot
        data={[
          {
            x: [0, 2, 3, 20],
            y: [0, 6, 3, 10],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            line: { color: "white" },
          },
          {
            x: [0, 3, 5, 20],
            y: [0, 6, 5, 15],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            line: { color: "white" },
          },
        ]}
        layout={{
          height: 500,
          title: "Burn Chart",
          plot_bgcolor: "#324361",
          paper_bgcolor: "#324361",
          font: {
            color: "white",
          },
          xaxis: { color: "white" },
          yaxis: { color: "white" },
        }}
        useResizeHandler={true}
        style={{ width: "1150px" }}
      />
    </Paper>
  );
}
