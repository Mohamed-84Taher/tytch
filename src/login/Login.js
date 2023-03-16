import { TextField, Grid, Typography, Card, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
// Yup schema
const messageError = "Vous devez remplir ce champ";
const schema = yup.object().shape({
  mail: yup
    .string()
    .email("Adresse mail n'est pas valide")
    .required(messageError)
    .nullable(),
  mdp: yup.string().required(messageError).nullable()
});

export default function Login() {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      mail: "",
      mdp: ""
    }
  });
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = methods;

  const onSubmit = data => {
    console.log(data);
    navigate("/tableau");
  };
  console.log(errors.mail?.message);

  return (
    <Box sx={{ mt: "15vh" }}>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card
          elevation={8}
          sx={{
            maxWidth: { xs: "80vw", md: "40vw", xl: "30vw" },
            margin: "0 auto",
            padding: "50px"
          }}>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              mt: "15px",
              marginBottom: "21px",
              textAlign: "center"
            }}>
            Login admin tytch
          </Typography>
          <FormProvider {...methods}>
            <form
              className="form"
              style={{ width: "", margin: "auto" }}>
              <Controller
                name="mail"
                control={control}
                rules={{
                  required: messageError
                }}
                render={({ field }) => {
                  return (
                    <div style={{ marginBottom: "20px" }}>
                      {errors.mail?.message ===
                        "Adresse mail n'est pas valide" ||
                      errors.mail?.message === "Vous devez remplir ce champ" ? (
                        <TextField
                          error
                          {...field}
                          label="Adresse mail"
                          variant="outlined"
                          fullWidth
                        />
                      ) : (
                        <TextField
                          {...field}
                          label="Adresse mail"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                      <br />
                      <span style={{ float: "left", color: "red" }}>
                        {" "}
                        {errors.mail?.message}
                      </span>
                    </div>
                  );
                }}
              />
              <br />
              <Controller
                name="mdp"
                control={control}
                rules={{
                  required: messageError
                }}
                render={({ field }) => {
                  return (
                    <div style={{ marginBottom: "20px" }}>
                      {errors.mdp?.message === "Vous devez remplir ce champ" ? (
                        <TextField
                          error
                          {...field}
                          label="Mots de passe"
                          variant="outlined"
                          type="password"
                          fullWidth
                        />
                      ) : (
                        <TextField
                          {...field}
                          label="Mot de passe"
                          variant="outlined"
                          type="password"
                          fullWidth
                        />
                      )}
                      <br />{" "}
                      <span style={{ float: "left", color: "red" }}>
                        {" "}
                        {errors.mdp?.message}
                      </span>{" "}
                    </div>
                  );
                }}
              />
              <br />
              <Button
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                fullWidth
                endIcon={<SendIcon />}
                sx={{ p: "13px 0" }}>
                Envoyer
              </Button>
            </form>
          </FormProvider>
        </Card>
      </Grid>
    </Box>
  );
}
