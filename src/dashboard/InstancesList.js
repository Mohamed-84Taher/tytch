import { useState } from "react";
import { format, addDays } from "date-fns";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SaveIcon from "@mui/icons-material/Save";
// mui components
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  ButtonGroup,
  Button
} from "@mui/material";
// components
import ModalEtendre from "./modals/ModalEtendre";
import ModalSupprime from "./modals/ModalSupprime";
import ModalMigration from "./modals/ModalMigration";
// styles
import { TableCellHeader } from "./Dashboard.styles";

const rows = [
  {
    instance: "instance1",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 3, 14, 5),
    willDeactivateAt: addDays(new Date(2022, 11, 3), 14)
  },
  {
    instance: "instance2",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 4, 11, 30),
    willDeactivateAt: addDays(new Date(2022, 11, 4), 14)
  },
  {
    instance: "instance3",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 5, 22, 10),
    willDeactivateAt: addDays(new Date(2022, 11, 5), 14)
  },
  {
    instance: "instance4",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 3, 12, 30),
    willDeactivateAt: addDays(new Date(2022, 11, 3), 14)
  },
  {
    instance: "instance5",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 3, 17, 12),
    willDeactivateAt: addDays(new Date(2022, 11, 3), 14)
  },
  {
    instance: "instance6",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 3, 9, 17),
    willDeactivateAt: addDays(new Date(2022, 11, 3), 14)
  },
  {
    instance: "instance7",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 3, 10, 13),
    willDeactivateAt: addDays(new Date(2022, 11, 3), 14)
  },
  {
    instance: "instance8",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 3, 12, 1),
    willDeactivateAt: addDays(new Date(2022, 11, 3), 14)
  },
  {
    instance: "instance9",
    fullname: "test test",
    mail: "test@exemple.com",
    societe: "test",
    createAt: new Date(2022, 11, 3, 15, 23),
    willDeactivateAt: addDays(new Date(2022, 11, 3), 14)
  }
];

const InstancesList = () => {
  const [open, setOpen] = useState(false);
  const [opensupp, setOpensupp] = useState(false);
  const [openmig, setOpenmig] = useState(false);
  const [instance, setInstance] = useState(null);

  const handleOpen = e => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpensupp = e => {
    setOpensupp(true);
  };
  const handleClosesupp = () => {
    setOpensupp(false);
  };
  const handleOpenmig = e => {
    setOpenmig(true);
  };
  const handleClosemig = () => {
    setOpenmig(false);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead
            style={{
              backgroundColor: "aliceblue",
              textTransform: "uppercase"
            }}>
            <TableRow>
              <TableCellHeader align="left">URL de l'instance</TableCellHeader>
              <TableCellHeader align="left">Nom et Prénom</TableCellHeader>
              <TableCellHeader align="left">Adresse E-mail</TableCellHeader>
              <TableCellHeader align="left">Société</TableCellHeader>
              <TableCellHeader align="left">Date de début</TableCellHeader>
              <TableCellHeader align="left">
                Date de désactivation
              </TableCellHeader>
              <TableCellHeader align="left">
                Date prévue de suppression
              </TableCellHeader>
              <TableCellHeader align="left">Actions</TableCellHeader>
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
                <TableCell align="left">
                  {format(row.createAt, "yyyy-MM-dd /HH-mm")}
                </TableCell>
                <TableCell align="left">
                  {format(row.willDeactivateAt, "yyyy-MM-dd")}
                </TableCell>
                <TableCell align="left">
                  {" "}
                  {format(addDays(row.willDeactivateAt, 60), "yyyy-MM-dd")}
                </TableCell>
                <TableCell align="left">
                  <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group">
                    <Button
                      size="small"
                      startIcon={<AccessTimeIcon />}
                      onClick={() => {
                        handleOpen();
                        setInstance(row.instance);
                      }}>
                      étendre
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        handleOpensupp();
                        setInstance(row.instance);
                      }}>
                      supprimer
                    </Button>
                    <Button
                      size="small"
                      style={{ backgroundColor: "green" }}
                      startIcon={<SaveIcon />}
                      onClick={() => {
                        handleOpenmig();
                        setInstance(row.instance);
                      }}>
                      migrer
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalEtendre
        open={open}
        handleClose={handleClose}
        instance={instance}
      />

      <ModalSupprime
        opensupp={opensupp}
        handleClosesupp={handleClosesupp}
        instance={instance}
      />
      <ModalMigration
        openmig={openmig}
        handleClosemig={handleClosemig}
        instance={instance}
      />
    </>
  );
};

export default InstancesList;
