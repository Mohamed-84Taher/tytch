import { memo } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Tableau de bord Tytch</Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
