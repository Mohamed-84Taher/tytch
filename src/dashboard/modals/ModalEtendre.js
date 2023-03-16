import { TextField, Button, Modal } from "@mui/material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";

// Yup schema
const messageError = "Vous devez remplir ce champ";
const schema = yup.object().shape({
  Date: yup
    .date()
    .required(messageError)
    .min(new Date(), "La date est invalide")
});

export default function ModalEtendre({ open, handleClose, instance }) {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      Date: format(new Date(), "yyyy-MM-dd'T'hh:mm")
    }
  });
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = methods;
  //  console.log(getValues().Date)
  const onSubmit = data => {
    console.log(new Date(data.Date));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
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
          Nouvelle date{" "}
        </h2>
        <div
          id="simple-modal-description"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div> Date d'expiration : {instance}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "28px"
            }}>
            <p>Nouvelle date : </p>
            <FormProvider {...methods}>
              <Controller
                name="Date"
                control={control}
                rules={{
                  required: messageError
                }}
                render={({ field }) => {
                  return (
                    <div>
                      <TextField
                        {...field}
                        id="date"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />{" "}
                      <br />
                      <span style={{ color: "red" }}>
                        {" "}
                        {errors.Date?.message}
                      </span>
                    </div>
                  );
                }}
              />
            </FormProvider>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}>
              Annuler
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "green" }}
              onClick={handleSubmit(onSubmit)}>
              Modifier
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
