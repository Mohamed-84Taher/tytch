import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody
} from "@mui/material";
import { TableCellHeader } from "./Dashboard.styles";

const rows = [
  {
    instance: "instance1",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance2",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance3",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance4",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance5",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance6",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance7",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance8",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  },
  {
    instance: "instance9",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test"
  }
];

export default function Migrationinstance() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead
            style={{
              backgroundColor: "aliceblue",
              textTransform: "uppercase",
              fontSize: "20px"
            }}>
            <TableRow>
              <TableCellHeader align="left">URL de l'instance</TableCellHeader>
              <TableCellHeader align="left">Nom et Prénom</TableCellHeader>
              <TableCellHeader align="left">Adresse E-mail</TableCellHeader>
              <TableCellHeader align="left">Société</TableCellHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.instance}>
                <TableCell align="left">
                  <a
                    href={`https://dev.tytch.fr/demo/${row.instance}`}
                    target="_blank"
                    rel="noreferrer">
                    {row.instance}
                  </a>
                </TableCell>
                <TableCell align="left">{row.fullname}</TableCell>
                <TableCell align="left">{row.mail}</TableCell>
                <TableCell align="left">{row.societe}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
