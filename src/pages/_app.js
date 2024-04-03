
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import Layout from "../components/layout/Layout.js";

function MyApp({ Component, pageProps, router }) {
  // console.log = function () {};
  // console.warn = function () {};
  // console.error = function () {};

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);


  const theme = createTheme({
    palette: {
      primary: {
        main: "#0006b1",
      },
    },
    typography: {
      fontFamily: "Open Sans, sans-serif",
    },
  });

  return (
    <>
      <StyledEngineProvider injectFirst>
        {!loading && (
          <>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </>
        )}
      </StyledEngineProvider>
    </>
  );
}
export default MyApp;
