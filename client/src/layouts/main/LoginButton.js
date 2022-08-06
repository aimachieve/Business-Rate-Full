// material
import React from "react"
import CloseIcon from "@material-ui/icons/Close";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Stack
} from "@material-ui/core";
import Logo from "components/Logo";
import useAuth from "hooks/useAuth";
import { LoginForm } from "components/authentication/login";

export default function LoginButton() {
  const { authModal, setAuthModal } = useAuth();

  const handleClickOpen = () => {
    setAuthModal("login");
  };
  const handleClose = () => {
    setAuthModal(null);
  };

  const open = Boolean(authModal === "login");

  return (
    <>
      <Button variant="text" onClick={handleClickOpen} sx={{ color: '#235789', fontSize: 18 }}>
        Login
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ px: 10, pb: 5 }}>
          <Logo sx={{ mx: "auto" }} />
          <Typography
            variant="h3"
            color="black"
            sx={{
              fontWeight: 400,
              mb: 5,
              fontFamily: "PoppinsBold",
              textAlign: "center",
            }}
          >
            Welcome Back
          </Typography>
          <LoginForm />
          {/* <Typography variant="subtitle1" align="center" sx={{ mt: 3 }}>
            Don’t have an account?&nbsp;
            <Button
              variant="outlined"
              size="large"
              sx={{ ml: 2, borderColor: "#131025", color: "#131025" }}
              onClick={() => setAuthModal('register')}
            >
              Sign Up
            </Button>
          </Typography> */}
          <Stack mt={3} direction="row" justifyContent={'space-around'} alignItems="center">
            <Typography variant="subtitle1" align="center">
              Don’t have an account?
            </Typography>
            <Button variant="outlined" onClick={() => setAuthModal('register')} sx={{
              color: "#ffb03d",
              border: "solid 2px #ffb03d",
              borderRadius: '50px',
              width: '150px'
            }}>
              Sign Up
            </Button>
          </Stack>
          <Typography
            gutterBottom
            variant="body2"
            align="center"
            color="grey.500"
            sx={{ px: 5, mt: 3 }}
          >
            This site is protected by reCAPTCHA and the Google{" "}
            <Typography variant="span" color="black">
              Privacy Policy
            </Typography>{" "}
            and{" "}
            <Typography variant="span" color="black">
              Terms and Service
            </Typography>{" "}
            apply
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
