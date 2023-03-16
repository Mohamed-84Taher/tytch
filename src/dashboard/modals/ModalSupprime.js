import { Button, Modal, Typography } from "@mui/material";

export default function ModalSupprime({ opensupp, handleClosesupp, instance }) {
  const handleSubmit = () => {
    console.log(instance);
    handleClosesupp();
  };
  return (
    <Modal
      open={opensupp}
      onClose={handleClosesupp}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div
        style={{
          width: "420px",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "249px",
          borderRadius: "11px",
          padding: "40px"
        }}>
        <h2
          id="simple-modal-title"
          style={{ textAlign: "center", color: "#1976d2" }}>
          Suppression une instance{" "}
        </h2>
        <div
          id="simple-modal-description"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "19px" }}>
            {" "}
            Voulez vous vraiment supprimer cette instance
          </div>
          <Typography
            variant="h4"
            align="center">
            Instance : {instance}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClosesupp}>
              Annuler
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "green" }}
              onClick={handleSubmit}>
              Supprimer
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
