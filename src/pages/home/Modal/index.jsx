import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthPage from "../../login";
// import Signin from "../../login/signin";
// import Signup from "../../login/signup";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "1px solid grey",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <Button onClick={handleOpen} className="white">
        Sign In
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* {isSignIn ? (
              <Signin setIsSignIn={setIsSignIn} />
            ) : (
              <Signup setIsSignIn={setIsSignIn} />
            )} */}
            <AuthPage />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
