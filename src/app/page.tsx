"use client";
import HeaderMenu from "@/components/HeaderMenu";
import useIsMounted from "@/utils/useIsMounted";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Container,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
const HomeListItems = [
  "Choose causes",
  "Save your portfolio",
  "Subscribe to make an impact",
  "Receive weekly impact updates",
];

export default function Home() {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const isMounted = useIsMounted();
  const { push } = useRouter();
  const pushToSelection = () => {
    push("/selection");
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
          justifyContent: isDesktopView ? "initial" : "space-between",
          paddingBottom: "50px",
        }}
      >
        <Box sx={isDesktopView ? { marginBottom: "50px" } : {}}>
          {isDesktopView ? (
            <></>
          ) : (
            <Image src="/bono-icon.svg" alt="logo" width={50} height={50} />
          )}

          <Typography variant="h1" sx={{ marginBottom: "10px" }}>
            Let&apos;s build your nonprofit portfolio
          </Typography>
          <Typography variant="h2" sx={{ marginBottom: "25px" }}>
            Join the movement and help fix the October 7th aftermath
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {HomeListItems.map((item, i) => (
              <InputLabel key={i}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box>
                    <Typography
                      sx={{
                        backgroundColor: "rgb(91, 134, 243)",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                      variant="body1"
                    >
                      {i + 1}
                    </Typography>
                  </Box>
                  <Typography variant="body1">{item}</Typography>
                </Box>
              </InputLabel>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "rgb(17, 17, 17)",
              borderRadius: "32px",
              height: "48px",
              color: "white",
              marginBottom: isDesktopView ? "20px" : "",
              width: isDesktopView ? "346px" : "100%",
              "&:hover": {
                backgroundColor: "rgb(17, 17, 17)",
                opacity: 0.8,
              },
            }}
            onClick={pushToSelection}
            endIcon={<ArrowForwardIcon />}
          >
            Let&apos;s start
          </Button>
          <Typography>
            By continuing you agree to{" "}
            <Link href="https://www.bono.so/tc" target="_blank">
              Terms and conditions
            </Link>{" "}
            and{" "}
            <Link href="https://www.bono.so/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
