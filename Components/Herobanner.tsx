"use client";
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

const Herobanner = () => {
  return (
    // changes require the background color set 
    <Box sx={{backgrounColor:"#E3F2FD"}}>
    <Box
      sx={{
        backgroundColor: "#FFA000", // Yellow background color
        paddingY: 2, // Reduced vertical padding
        paddingX: 4, // Horizontal padding
        width: "75%", // Set width to 75%
        marginLeft: "20%", // Move the box to the right by 20%
        marginTop: "-180px", // Move the box closer to the hero section
        position: "relative", // Ensure the box is positioned relative to its container
        zIndex: 1, // Ensure the box appears above other content
        height: "94px", // Set box height to 100px
        display: { xs: "none", md: "block" }, // Hide on small devices, show on medium and larger devices
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          {/* Left Side: Image */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                width: "202px", // Adjusted image container width
                height: "202px", // Adjusted image container height
                borderRadius: "8px",
                overflow: "hidden",
                marginTop: "-54px", // Adjust image position to fit within the yellow box
                marginLeft: "-20px",
              }}
            >
              <Image
                src="/Boiler.png" // Replace with your image path
                alt="Plumbing and Heating"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>

          {/* Right Side: Content (70%) */}
          <Grid item xs={12} md={7}>
            {/* Banner Description */}
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                marginBottom: 2, // Reduced margin
                marginLeft: "-180px",
                fontSize: "32px", // Adjusted font size
                marginTop: "-30px", // Adjust text position to align with the image
                whiteSpace: "nowrap", // Prevent text from wrapping to the next line
                overflow: "hidden", // Hide overflow text
                textOverflow: "ellipsis", // Add ellipsis for overflow text
                // animation: "marquee 10s linear infinite", // Marquee animation
              }}
            >
              Keep your home covered with maintenance.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* Define the Marquee Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
    </Box>
  );
};

export default Herobanner;