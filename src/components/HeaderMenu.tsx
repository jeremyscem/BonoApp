import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
const HeaderMenu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50px", height: "50px", position: "relative" }}>
            <Image src="/bono-icon.svg" alt="logo" objectFit="contain" fill />
          </Box>

          <Button
            sx={{
              backgroundColor: "white",
              height: "30px",
              borderRadius: "10px",
              fontSize: "12px",
              color: "rgb(51, 51, 51)",
              fontWeight: "bold",
              ":hover": {
                color: "white",
              },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderMenu;
