import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Metadata } from "next";
import theme from "../theme";

export const metadata: Metadata = {
  title: "Bono App",
  description: "Bono Nonprofit Portfolio Builder",
  icons: {
    icon: {
      url: "/bono-icon.svg",
    },
  },
  openGraph: {
    title: "Bono App",
    description: "Bono Nonprofit Portfolio Builder",
    url: "https://app.bono.so",
    siteName: "Bono App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ height: "100%", backgroundColor: "#edf0ef", margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main style={{ height: "100%" }}>{children} </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
