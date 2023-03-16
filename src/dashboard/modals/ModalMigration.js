import { Button, Modal } from "@mui/material";

export default function ModalMigration({ openmig, handleClosemig, instance }) {
  const onSubmit = () => {
    console.log(instance);
    handleClosemig();
  };

  return (
    <Modal
      open={openmig}
      onClose={handleClosemig}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "249px",
          borderRadius: "11px",
          padding: "40px"
        }}>
        <h2
          id="simple-modal-title"
          style={{ textAlign: "center", color: "#1976d2" }}>
          Migration une instance{" "}
        </h2>
        <div
          id="simple-modal-description"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "19px", textAlign: "center" }}>
            {" "}
            Voulez vous migrer cette instance
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClosemig}>
              Annuler
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "green" }}
              onClick={onSubmit}>
              Migrer
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
