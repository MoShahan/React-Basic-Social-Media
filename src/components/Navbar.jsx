import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  ConnectWithoutContact,
  Mail,
  Notifications,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "15%",
  color: "black",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "10%",
  color: "black",
  display: "none",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <ConnectWithoutContact />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          My Social Media App
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/superhero-batman-dark-knight-512.png"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)} sx={{ cursor: "pointer" }}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/superhero-batman-dark-knight-512.png"
          />
          <Typography variant="span">Batman</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        sx={{ top: "20px" }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
