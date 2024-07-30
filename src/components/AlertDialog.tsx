import { Box, Button, Typography } from "@mui/material";

const AlertDialog = ({
  text,
  onClose,
}: {
  text: string;
  onClose: () => void;
}) => {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant={"body1"}>{text}</Typography>
      <Button
        sx={{
          backgroundColor: "rgb(17, 17, 17)",
          borderRadius: "32px",
          height: "48px",
          color: "white",
          width: "100%",
          "&:hover": {
            backgroundColor: "rgb(17, 17, 17)",
            opacity: 0.8,
          },
          boxShadow: "-5px 7px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={onClose}
      >
        Got it
      </Button>
    </Box>
  );
};

export default AlertDialog;
