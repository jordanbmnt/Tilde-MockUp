import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";

const Cell = styled(TableCell)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: "#fff7",
}));
const Heading = styled(TableCell)(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(3),
  color: "#fff",
}));

const tableHeadings = [
  "Project",
  "Competence review count",
  "PR review count",
  "Reviews",
];

function createData(project, competenceCount, prCount, review) {
  return { project, competenceCount, prCount, review };
}

const rows = [
  createData("Morse Code", 3, 0, ["C", "PR approved"]),
  createData("Shop Database using SQL", 2, 9, ["C"]),
  createData("simple-calculator part 1", 4, 1, ["C", "PR changes_requested"]),
  createData("EXPOSE A JSON API", 1, 7, ["C"]),
  createData("Tilde Mockups", 7, 6, ["C", "PR approved", "C"]),
];

export default function Review() {
  return (
    <TableContainer>
      <Table
        sx={{ maxWidth: "90vw", margin: "10vh auto" }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            {tableHeadings.map((heading) => {
              return <Heading>{heading}</Heading>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow>
                <Cell>{row.project}</Cell>
                <Cell>{row.competenceCount}</Cell>
                <Cell>{row.prCount}</Cell>
                <Cell>
                  <Stack direction='row' spacing={1}>
                    {row.review.map((chip) => {
                      return chip === "C" ? (
                        <Chip color='success' label={chip}></Chip>
                      ) : (
                        <Chip
                          color='primary'
                          label={chip}
                          variant='outlined'
                        ></Chip>
                      );
                    })}
                  </Stack>
                </Cell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
