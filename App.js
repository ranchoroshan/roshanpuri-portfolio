import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">
        <Hero />
        {/* Add more sections here */}
      </Container>
    </>
  );
}

export default App;