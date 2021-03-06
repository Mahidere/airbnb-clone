import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import LocationCards from "./components/LocationCards";
import Footer from "./components/Footer";
import FooterMenu from "./components/FooterMenu";

import { displayOnDesktop } from "./themes/commonStyles";
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              height: "75vh",
              overflowY: "scroll",
            }}
          >
            <Container maxWidth="xl" sx={{ mb: 3 }}>
              <LocationCards />
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <MobileFooter />
              </Box>
            </Container>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
