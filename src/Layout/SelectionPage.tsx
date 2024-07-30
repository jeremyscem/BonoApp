"use client";
import AlertDialog from "@/components/AlertDialog";
import HeaderMenu from "@/components/HeaderMenu";
import { CausesData, ItemCause } from "@/types";
import useIsMounted from "@/utils/useIsMounted";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Dialog,
  LinearProgress,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isDesktop } from "react-device-detect";
import { SelectedCauseType, causesItemsVar } from "../../store";
const MAX_CAUSES_LENGTH = 3;
const SelectionPage = ({ data }: { data: CausesData }) => {
  const isMounted = useIsMounted();
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [selectedData, setSelectedData] = useState<SelectedCauseType[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");
  const router = useRouter();

  const addData = (item: ItemCause) => {
    if (selectedData.find((obj) => obj.id === item.id)) {
      const newData = [...selectedData.filter((obj) => obj.id !== item.id)];
      setSelectedData(newData);
    } else if (selectedData.length < MAX_CAUSES_LENGTH) {
      const newData = [
        ...selectedData,
        {
          id: item.id,
          icon: item.icon,
          description: item.description,
          title: item.title,
        },
      ];
      setSelectedData(newData);
    } else {
      setDialogOpen(true);
      setDialogText(
        "You can add only 3 causes. Please remove one if you wish to add a different one."
      );
    }
  };

  const routeToSignUp = () => {
    if (selectedData.length < MAX_CAUSES_LENGTH) {
      setDialogOpen(true);
      setDialogText(
        "Please pick 3 causes for your portfolio in order to continue"
      );
    } else {
      causesItemsVar(selectedData);
      router.push("/signup");
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      setIsDesktopView(isDesktop);
    }
  }, [isMounted]);
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

        <Box>
          <Typography variant="h1">Let&apos;s build your portfolio</Typography>
          <Typography sx={{ marginBottom: "20px" }} variant="h2">
            Pick the 3 causes that you mostly care about
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isDesktopView ? "row" : "column",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto",
                gridTemplateRows: isDesktopView ? "1fr 1fr 1fr" : "1fr 1fr",
                gridAutoFlow: "column",
                overflowX: "auto",
                gap: "8px",
                scrollbarWidth: "none",
                marginBottom: "20px",
                paddingInlineEnd: "16px",
                paddingTop: "16px",
                paddingBottom: "16px",
                marginInlineEnd: "-16px",
              }}
            >
              {data.data.map((item) => (
                <Button
                  sx={{
                    backgroundColor: item.impactBackground,
                    width: "120px",
                    height: "120px",
                    borderRadius: "16px",
                    boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    ":hover": { backgroundColor: item.impactBackground },
                  }}
                  key={item.id}
                  onClick={() => addData(item)}
                >
                  <Typography
                    sx={{
                      color: "rgb(17, 17, 17)",
                      fontSize: "12px",
                      textAlign: "start",
                      lineHeight: "16px",
                      fontWeight: "bold",
                    }}
                    key={item.id}
                  >
                    {item.title}
                  </Typography>
                  {selectedData.find((obj) => obj.id === item.id) ? (
                    <CheckCircleOutlineRoundedIcon
                      style={{
                        color: "rgb(17, 17, 17)",
                      }}
                    />
                  ) : (
                    <AddCircleOutlineRoundedIcon
                      style={{ color: "rgb(17, 17, 17)" }}
                    />
                  )}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                position: isDesktopView ? "absolute" : "relative",
                right: "0px",
                width: isDesktopView ? "30%" : "auto",
                paddingInlineStart: isDesktopView ? "16px" : "0px",
              }}
            >
              {selectedData.length > 0 && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "16px",
                      alignItems: isDesktopView ? "flex-start" : "center",
                      flexDirection: isDesktopView ? "column" : "row",
                      borderLeft: isDesktopView ? "1px solid grey" : "none",
                      minHeight: isDesktopView ? "400px" : "auto",
                      paddingLeft: isDesktopView ? "16px" : "0px",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="h3">
                        {selectedData[selectedData.length - 1]?.title}
                      </Typography>
                      <Typography variant="body1">
                        {selectedData[selectedData.length - 1]?.description}
                      </Typography>
                    </Box>
                    <Image
                      style={{ borderRadius: "16px" }}
                      src={selectedData[selectedData.length - 1]?.icon ?? ""}
                      width={100}
                      height={100}
                      alt="logo"
                    />
                  </Box>
                </>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f7f7f7",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              borderTop: isDesktopView ? "" : "1px solid grey",
              position: isDesktopView ? "relative" : "absolute",
              bottom: "0",
              right: "0",
              padding: isDesktopView ? "" : "16px 32px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Box>
              <Typography variant="body1">
                {selectedData.length}/{MAX_CAUSES_LENGTH} causes add
              </Typography>
              <LinearProgress
                sx={{
                  height: "8px",
                  borderRadius: "32px",
                }}
                variant="determinate"
                value={(selectedData.length / MAX_CAUSES_LENGTH) * 100}
              />
            </Box>

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
                boxShadow: "-5px 7px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={routeToSignUp}
              endIcon={<ArrowForwardIcon />}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Container>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: "16px",
            boxShadow: "-5px 7px 4px black",
          },
        }}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <AlertDialog text={dialogText} onClose={() => setDialogOpen(false)} />
      </Dialog>
    </>
  );
};

export default SelectionPage;
