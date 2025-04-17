import React from "react";
import { Typography, Box, Avatar } from "@mui/material";

const Hero = () => {
  return (
    <Box textAlign="center" mt={4}>
      <Avatar
        alt="Roshan Puri"
        src="/profile.webp"
        sx={{ width: 120, height: 120, margin: "0 auto", border: "2px solid #555" }}
      />
      <Box
        mt={2}
        p={2}
        sx={{
          border: "2px dashed #555",
          display: "inline-block",
          animation: "pulse 2s infinite"
        }}
      >
        <Typography variant="h4" fontWeight="bold">Roshan Puri</Typography>
      </Box>
      <Typography mt={1}>IoT and Robotics Enthusiast | Tabla Player | Traveller | Spirituality Seeker</Typography>
    </Box>
  );
};

export default Hero;