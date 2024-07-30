"use client";
import HeaderMenu from "@/components/HeaderMenu";
import useIsMounted from "@/utils/useIsMounted";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import * as Yup from "yup";
import { causesItemsVar } from "../../store";

const SignupPage = () => {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const isMounted = useIsMounted();
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  console.log(causesItemsVar());
  const submit = async (values: { name: string; email: string }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        firstName: values.name,
        causes: causesItemsVar().map((item) => item.id),
      }),
    };
    try {
      const res = await fetch(
        "https://dev.api.bono.so/v1/auth/register/anonymous",
        requestOptions
      );
      if (res.status !== 200) {
        alert("Something went wrong");
      } else {
        alert("Success");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (isMounted.current) {
      setIsDesktopView(isDesktop);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      {isDesktopView ? <HeaderMenu /> : <></>}
      <Container
        sx={{
          paddingTop: isDesktopView ? "173px" : "20px",
          width: isDesktopView ? "max-content" : "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "50px",
          gap: "20px",
        }}
      >
        <ButtonBase
          onClick={() => router.back()}
          sx={{
            backgroundColor: "black",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        >
          <ArrowBackIcon style={{ color: "white" }} />
        </ButtonBase>

        <Box sx={{ height: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ paddingInlineEnd: "20px" }} variant="h1">
              Let&apos;s save your portfolio
            </Typography>
            <Typography variant="h2">
              You&apos;ll receive weekly impact reports from Bono. Your email is
              not shared with anyone!
            </Typography>
            <Button
              sx={{
                backgroundColor: "#f7f7f7",
                borderRadius: "32px",
                border: "solid 1px rgb(17, 17, 17)",
                height: "48px",
                fontWeight: "bold",
                color: "rgb(17, 17, 17)",
                marginBottom: "20px",
                width: isDesktopView ? "346px" : "100%",
                alignSelf: "center",
                "&:hover": {
                  backgroundColor: "rgb(17, 17, 17)",
                  color: "white",
                },
              }}
              startIcon={
                <Image
                  width={24}
                  height={24}
                  alt="logo"
                  src="/icon-google.svg"
                />
              }
            >
              Continue with Google
            </Button>
          </Box>
          <Divider>
            <Typography>or</Typography>
          </Divider>
          <Box pt={2} sx={{ height: "100%" }}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ name: "", email: "" }}
              onSubmit={submit}
            >
              {({
                errors,
                handleSubmit,
                handleChange,
                handleBlur,
                touched,
                values,
                isSubmitting,
              }) => (
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    height: "calc(100% - 24vh)",
                  }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <p style={{ color: "red" }}>{errors.name}</p>
                  )}
                  <TextField
                    type="email"
                    name="email"
                    placeholder="Your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                  <Typography sx={{ color: "gray", textAlign: "center" }}>
                    You will receive a temporary password by email
                  </Typography>
                  <Button
                    type="submit"
                    endIcon={<ArrowForwardIcon />}
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: "rgb(17, 17, 17)",
                      borderRadius: "32px",
                      height: "48px",
                      color: "white",
                      width: isDesktopView ? "346px" : "100%",
                      "&:hover": {
                        backgroundColor: "rgb(17, 17, 17)",
                        opacity: 0.8,
                      },
                      boxShadow: "-5px 7px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: isDesktopView ? "" : "auto",
                      alignSelf: "center",
                    }}
                  >
                    Save and Continue!
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignupPage;
